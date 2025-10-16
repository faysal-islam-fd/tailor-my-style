interface FeaturedInProps {
  language?: 'en' | 'bn'
}

export default function FeaturedIn({ language = 'en' }: FeaturedInProps) {
  const content = {
    en: {
      title: 'Featured in'
    },
    bn: {
      title: 'ফিচার করা হয়েছে'
    }
  }

  const currentContent = content[language]

  const publications = [
    { name: 'Esquire', logo: 'ESQUIRE' },
    { name: 'GQ', logo: 'GQ' },
    { name: 'Forbes', logo: 'Forbes' }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-background border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-[0.2em] font-semibold mb-10">
          {currentContent.title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="text-3xl md:text-4xl font-bold text-gray-300 hover:text-gray-900 transition-all duration-300 cursor-pointer hover:scale-110"
            >
              {pub.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

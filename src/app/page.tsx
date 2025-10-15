import HeroSection from '@/components/home/HeroSection'
import BespokeCategories from '@/components/home/BespokeCategories'
import HighTechTailoring from '@/components/home/HighTechTailoring'
import OutfitIdeas from '@/components/home/OutfitIdeas'
import SustainabilitySection from '@/components/home/SustainabilitySection'
import QualitySection from '@/components/home/QualitySection'
import PerfectFitSection from '@/components/home/PerfectFitSection'
import FeaturedIn from '@/components/home/FeaturedIn'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <BespokeCategories />
      <HighTechTailoring />
      <OutfitIdeas />
      <SustainabilitySection />
      <QualitySection />
      <PerfectFitSection />
      <FeaturedIn />
      <TestimonialsSection />
    </>
  )
}

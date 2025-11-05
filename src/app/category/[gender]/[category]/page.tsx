import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home, Scissors, Ruler, Palette, Sparkles, Star, Check, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface PageProps {
  params: {
    gender: string
    category: string
  }
}

// Category data with full landing page content
const categoryData: Record<string, Record<string, any>> = {
  men: {
    suits: {
      name: 'Custom Suits',
      tagline: 'from $399',
      hero: {
        title: 'Custom Suits',
        subtitle: 'from $399',
        description: 'Design a suit that\'s uniquely yours. Choose from premium fabrics, customize every detail, and get a perfect fit tailored to your exact measurements. Our master tailors craft each suit with precision and care.',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200',
      },
      styles: [
        { name: 'Classic Two-Piece', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', price: '$399' },
        { name: 'Slim Fit', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', price: '$399' },
        { name: 'Three-Piece', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', price: '$499' },
        { name: 'Double Breasted', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', price: '$449' },
        { name: 'Tuxedo', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400', price: '$599' },
      ],
      collections: [
        { name: 'Navy Classic', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', price: '$399', description: 'Timeless navy wool' },
        { name: 'Charcoal Grey', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', price: '$399', description: 'Professional elegance' },
        { name: 'Black Tie', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', price: '$599', description: 'Formal occasions' },
        { name: 'Light Grey', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', price: '$399', description: 'Summer sophistication' },
        { name: 'Blue Pinstripe', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400', price: '$449', description: 'Executive style' },
        { name: 'Brown Tweed', image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400', price: '$479', description: 'Casual refined' },
      ],
    },
    shirts: {
      name: 'Custom Shirts',
      tagline: 'from $89',
      hero: {
        title: 'Custom Shirts',
        subtitle: 'from $89',
        description: 'Create the perfect dress shirt tailored to your measurements. Choose from premium Egyptian cotton, customize collar and cuffs, and add your personal monogram. Each shirt is crafted to perfection.',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200',
      },
      styles: [
        { name: 'Classic Dress', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', price: '$89' },
        { name: 'Slim Fit', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400', price: '$89' },
        { name: 'Oxford', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', price: '$99' },
        { name: 'French Cuff', image: 'https://images.unsplash.com/photo-1598032895397-b9e72d8bc9c9?w=400', price: '$109' },
        { name: 'Button Down', image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=400', price: '$89' },
      ],
      collections: [
        { name: 'White Classic', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', price: '$89', description: 'Essential white' },
        { name: 'Light Blue', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400', price: '$89', description: 'Professional staple' },
        { name: 'Pink Oxford', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', price: '$99', description: 'Casual elegance' },
        { name: 'Navy Twill', image: 'https://images.unsplash.com/photo-1598032895397-b9e72d8bc9c9?w=400', price: '$99', description: 'Modern professional' },
        { name: 'Striped', image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=400', price: '$99', description: 'Classic pattern' },
        { name: 'Checked', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400', price: '$109', description: 'Smart casual' },
      ],
    },
    pants: {
      name: 'Custom Pants',
      tagline: 'from $129',
      hero: {
        title: 'Custom Pants',
        subtitle: 'from $129',
        description: 'Design perfectly fitted trousers tailored to your exact measurements. Choose your fabric, style, and finishing details. Our pants are made to move with you while maintaining their shape.',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200',
      },
      styles: [
        { name: 'Dress Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', price: '$129' },
        { name: 'Chinos', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400', price: '$129' },
        { name: 'Pleated', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400', price: '$149' },
        { name: 'Flat Front', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', price: '$129' },
        { name: 'Casual', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$119' },
      ],
      collections: [
        { name: 'Navy Wool', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', price: '$149', description: 'Classic formal' },
        { name: 'Grey Flannel', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400', price: '$149', description: 'Winter comfort' },
        { name: 'Khaki Chino', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400', price: '$129', description: 'Versatile casual' },
        { name: 'Black Dress', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', price: '$149', description: 'Formal elegance' },
        { name: 'Tan Cotton', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$129', description: 'Summer style' },
        { name: 'Brown Cord', image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400', price: '$139', description: 'Casual texture' },
      ],
    },
    blazers: {
      name: 'Custom Blazers',
      tagline: 'from $349',
      hero: {
        title: 'Custom Blazers',
        subtitle: 'from $349',
        description: 'A perfectly tailored blazer is the cornerstone of a refined wardrobe. Customize every detail from lapels to buttons, and choose from premium fabrics. Made to your exact measurements.',
        image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1200',
      },
      styles: [
        { name: 'Navy Classic', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', price: '$349' },
        { name: 'Sport Coat', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400', price: '$369' },
        { name: 'Double Breasted', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', price: '$399' },
        { name: 'Casual Linen', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', price: '$329' },
        { name: 'Velvet', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: '$449' },
      ],
      collections: [
        { name: 'Navy Wool', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', price: '$349', description: 'Timeless essential' },
        { name: 'Grey Flannel', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400', price: '$369', description: 'Sophisticated' },
        { name: 'Black Evening', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', price: '$399', description: 'Formal occasions' },
        { name: 'Tan Summer', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', price: '$329', description: 'Warm weather' },
        { name: 'Blue Velvet', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: '$449', description: 'Statement piece' },
        { name: 'Brown Tweed', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', price: '$389', description: 'Country style' },
      ],
    },
    coats: {
      name: 'Custom Coats',
      tagline: 'from $599',
      hero: {
        title: 'Custom Coats',
        subtitle: 'from $599',
        description: 'Stay warm in style with a custom-tailored coat. Choose from cashmere, wool, or waterproof fabrics. Each coat is made to your measurements for a perfect fit over suits or casual wear.',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200',
      },
      styles: [
        { name: 'Overcoat', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', price: '$599' },
        { name: 'Trench', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', price: '$649' },
        { name: 'Car Coat', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$549' },
        { name: 'Pea Coat', image: 'https://images.unsplash.com/photo-1548126032-079329017ffd?w=400', price: '$579' },
        { name: 'Topcoat', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: '$629' },
      ],
      collections: [
        { name: 'Charcoal Wool', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', price: '$599', description: 'Winter essential' },
        { name: 'Navy Cashmere', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', price: '$1199', description: 'Luxury warmth' },
        { name: 'Camel Hair', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$899', description: 'Classic elegance' },
        { name: 'Black Overcoat', image: 'https://images.unsplash.com/photo-1548126032-079329017ffd?w=400', price: '$599', description: 'Formal perfection' },
        { name: 'Tan Trench', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: '$649', description: 'All-weather' },
        { name: 'Grey Topcoat', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', price: '$629', description: 'Business style' },
      ],
    },
    vests: {
      name: 'Custom Vests',
      tagline: 'from $149',
      hero: {
        title: 'Custom Vests',
        subtitle: 'from $149',
        description: 'Complete your three-piece look with a custom vest. Match your suit or create contrast. Every vest is tailored to your exact measurements for a perfect fit.',
        image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=1200',
      },
      styles: [
        { name: 'Classic', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400', price: '$149' },
        { name: 'Slim Fit', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', price: '$149' },
        { name: 'Double Breasted', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', price: '$179' },
        { name: 'Casual', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', price: '$139' },
        { name: 'Formal', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', price: '$169' },
      ],
      collections: [
        { name: 'Navy Wool', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400', price: '$149', description: 'Classic match' },
        { name: 'Grey Silk', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', price: '$199', description: 'Luxury finish' },
        { name: 'Black Formal', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', price: '$169', description: 'Evening wear' },
        { name: 'Tweed', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', price: '$159', description: 'Textured style' },
        { name: 'Burgundy', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', price: '$149', description: 'Bold accent' },
        { name: 'Checked', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400', price: '$159', description: 'Pattern interest' },
      ],
    },
  },
  women: {
    dresses: {
      name: 'Custom Dresses',
      tagline: 'from $249',
      hero: {
        title: 'Custom Dresses',
        subtitle: 'from $249',
        description: 'Design a dress that fits you perfectly. From cocktail to formal, create your dream dress with our expert tailors. Choose fabric, neckline, sleeves, and length for a one-of-a-kind piece.',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200',
      },
      styles: [
        { name: 'A-Line', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', price: '$249' },
        { name: 'Sheath', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400', price: '$249' },
        { name: 'Wrap', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400', price: '$269' },
        { name: 'Maxi', image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=400', price: '$279' },
        { name: 'Cocktail', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400', price: '$299' },
      ],
      collections: [
        { name: 'Black Elegance', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', price: '$249', description: 'Timeless classic' },
        { name: 'Navy Sheath', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400', price: '$249', description: 'Professional style' },
        { name: 'Red Wrap', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400', price: '$269', description: 'Statement piece' },
        { name: 'Floral Maxi', image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=400', price: '$279', description: 'Romantic style' },
        { name: 'Cocktail Dress', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400', price: '$299', description: 'Party ready' },
        { name: 'Midi Dress', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400', price: '$259', description: 'Versatile chic' },
      ],
    },
    blouses: {
      name: 'Custom Blouses',
      tagline: 'from $129',
      hero: {
        title: 'Custom Blouses',
        subtitle: 'from $129',
        description: 'Design a beautifully tailored blouse that fits perfectly. Choose from silk, cotton, or chiffon. Customize collar, sleeves, and finishing details for a piece that&apos;s uniquely yours.',
        image: 'https://images.unsplash.com/photo-1564257577661-6b77d3f6c878?w=1200',
      },
      styles: [
        { name: 'Button-Up', image: 'https://images.unsplash.com/photo-1564257577661-6b77d3f6c878?w=400', price: '$129' },
        { name: 'Silk Shell', image: 'https://images.unsplash.com/photo-1589810876502-a836fb4f0b6c?w=400', price: '$149' },
        { name: 'Tie-Neck', image: 'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=400', price: '$139' },
        { name: 'Wrap Style', image: 'https://images.unsplash.com/photo-1580651214613-43c729888772?w=400', price: '$139' },
        { name: 'Peplum', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$149' },
      ],
      collections: [
        { name: 'White Silk', image: 'https://images.unsplash.com/photo-1564257577661-6b77d3f6c878?w=400', price: '$149', description: 'Timeless elegance' },
        { name: 'Navy Cotton', image: 'https://images.unsplash.com/photo-1589810876502-a836fb4f0b6c?w=400', price: '$129', description: 'Professional style' },
        { name: 'Pink Chiffon', image: 'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=400', price: '$139', description: 'Feminine touch' },
        { name: 'Black Satin', image: 'https://images.unsplash.com/photo-1580651214613-43c729888772?w=400', price: '$149', description: 'Evening elegance' },
        { name: 'Cream Poplin', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$129', description: 'Casual chic' },
        { name: 'Blue Silk', image: 'https://images.unsplash.com/photo-1564257577661-6b77d3f6c878?w=400', price: '$149', description: 'Sophisticated' },
      ],
    },
    skirts: {
      name: 'Custom Skirts',
      tagline: 'from $149',
      hero: {
        title: 'Custom Skirts',
        subtitle: 'from $149',
        description: 'Create a perfectly fitted skirt tailored to your measurements. Choose your style, length, and fabric. From pencil to pleated, every skirt is made just for you.',
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=1200',
      },
      styles: [
        { name: 'Pencil', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400', price: '$149' },
        { name: 'A-Line', image: 'https://images.unsplash.com/photo-1564257577661-6b77d3f6c878?w=400', price: '$149' },
        { name: 'Pleated', image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=400', price: '$169' },
        { name: 'Wrap', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400', price: '$159' },
        { name: 'Midi', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400', price: '$159' },
      ],
      collections: [
        { name: 'Black Pencil', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400', price: '$149', description: 'Office essential' },
        { name: 'Navy A-Line', image: 'https://images.unsplash.com/photo-1564257577661-6b77d3f6c878?w=400', price: '$149', description: 'Versatile style' },
        { name: 'Grey Pleated', image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=400', price: '$169', description: 'Movement & flow' },
        { name: 'Wrap Midi', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400', price: '$159', description: 'Flattering fit' },
        { name: 'Floral Print', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400', price: '$159', description: 'Feminine style' },
        { name: 'Leather Look', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400', price: '$179', description: 'Edgy chic' },
      ],
    },
    pants: {
      name: 'Custom Pants',
      tagline: 'from $149',
      hero: {
        title: 'Custom Pants',
        subtitle: 'from $149',
        description: 'Perfectly tailored pants that fit like a dream. Choose from wide leg, slim fit, or straight styles. Made to your exact measurements for all-day comfort.',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200',
      },
      styles: [
        { name: 'Straight Leg', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', price: '$149' },
        { name: 'Wide Leg', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400', price: '$159' },
        { name: 'Slim Fit', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400', price: '$149' },
        { name: 'Cropped', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$139' },
        { name: 'Palazzo', image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400', price: '$169' },
      ],
      collections: [
        { name: 'Black Straight', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', price: '$149', description: 'Timeless classic' },
        { name: 'Wide Leg Navy', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400', price: '$159', description: 'Modern style' },
        { name: 'Grey Slim', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400', price: '$149', description: 'Professional' },
        { name: 'Cropped White', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$139', description: 'Summer ready' },
        { name: 'Palazzo Pants', image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400', price: '$169', description: 'Flowing elegance' },
        { name: 'Pinstripe', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', price: '$159', description: 'Business chic' },
      ],
    },
    blazers: {
      name: 'Custom Blazers',
      tagline: 'from $399',
      hero: {
        title: 'Custom Blazers',
        subtitle: 'from $399',
        description: 'A perfectly tailored blazer is the foundation of a powerful wardrobe. Customize lapels, buttons, and lining. Made to your measurements for confident style.',
        image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1200',
      },
      styles: [
        { name: 'Single Breasted', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: '$399' },
        { name: 'Double Breasted', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', price: '$449' },
        { name: 'Boyfriend', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400', price: '$379' },
        { name: 'Peplum', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', price: '$429' },
        { name: 'Cropped', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$369' },
      ],
      collections: [
        { name: 'Navy Power', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: '$399', description: 'Executive style' },
        { name: 'Black Classic', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', price: '$399', description: 'Timeless elegance' },
        { name: 'Boyfriend Fit', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400', price: '$379', description: 'Relaxed chic' },
        { name: 'Pink Peplum', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', price: '$429', description: 'Feminine power' },
        { name: 'White Summer', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$369', description: 'Fresh style' },
        { name: 'Velvet Evening', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: '$499', description: 'Luxury piece' },
      ],
    },
    coats: {
      name: 'Custom Coats',
      tagline: 'from $699',
      hero: {
        title: 'Custom Coats',
        subtitle: 'from $699',
        description: 'Elegant coats tailored to perfection. Choose from cashmere, wool, or waterproof fabrics. Stay warm and stylish with a coat made just for you.',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200',
      },
      styles: [
        { name: 'Trench', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', price: '$699' },
        { name: 'Wrap Coat', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400', price: '$749' },
        { name: 'Pea Coat', image: 'https://images.unsplash.com/photo-1548126032-079329017ffd?w=400', price: '$679' },
        { name: 'Long Wool', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', price: '$799' },
        { name: 'Belted', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$729' },
      ],
      collections: [
        { name: 'Classic Trench', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', price: '$699', description: 'Timeless style' },
        { name: 'Camel Wrap', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400', price: '$749', description: 'Elegant warmth' },
        { name: 'Navy Pea Coat', image: 'https://images.unsplash.com/photo-1548126032-079329017ffd?w=400', price: '$679', description: 'Classic design' },
        { name: 'Long Cashmere', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', price: '$1199', description: 'Luxury comfort' },
        { name: 'Belted Wool', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', price: '$729', description: 'Feminine silhouette' },
        { name: 'Black Overcoat', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', price: '$799', description: 'Sophisticated' },
      ],
    },
  },
  older: {
    'comfortable-shirts': {
      name: 'Comfortable Shirts',
      tagline: 'from $79',
      hero: {
        title: 'Comfortable Shirts',
        subtitle: 'from $79',
        description: 'Easy-wear shirts designed with your comfort in mind. Large buttons, soft fabrics, and relaxed fits. Tailored to your measurements for the perfect fit.',
        image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=1200',
      },
      styles: [
        { name: 'Easy Button', image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400', price: '$79' },
        { name: 'Polo Style', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', price: '$79' },
        { name: 'Camp Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', price: '$89' },
        { name: 'Tunic', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400', price: '$89' },
      ],
      collections: [
        { name: 'Blue Comfort', image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400', price: '$79', description: 'Easy care' },
        { name: 'White Polo', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', price: '$79', description: 'Classic style' },
        { name: 'Plaid Casual', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', price: '$89', description: 'Relaxed fit' },
        { name: 'Navy Tunic', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400', price: '$89', description: 'Extra comfort' },
      ],
    },
    'easy-pants': {
      name: 'Easy Pants',
      tagline: 'from $89',
      hero: {
        title: 'Easy Pants',
        subtitle: 'from $89',
        description: 'Comfortable pants with elastic or drawstring waists. Soft fabrics and relaxed fits for all-day comfort. Tailored to your measurements.',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1200',
      },
      styles: [
        { name: 'Elastic Waist', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400', price: '$89' },
        { name: 'Drawstring', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', price: '$89' },
        { name: 'Relaxed Fit', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', price: '$89' },
        { name: 'Track Pants', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400', price: '$79' },
      ],
      collections: [
        { name: 'Navy Comfort', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400', price: '$89', description: 'Easy wear' },
        { name: 'Grey Relaxed', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', price: '$89', description: 'All-day comfort' },
        { name: 'Black Elastic', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', price: '$89', description: 'Simple style' },
        { name: 'Track Pants', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400', price: '$79', description: 'Active comfort' },
      ],
    },
  },
  children: {
    't-shirts': {
      name: 'Kids T-Shirts',
      tagline: 'from $29',
      hero: {
        title: 'Kids T-Shirts',
        subtitle: 'from $29',
        description: 'Fun and comfortable t-shirts for kids. Soft fabrics, durable construction, and fun designs. Made to fit perfectly.',
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1200',
      },
      styles: [
        { name: 'Crew Neck', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400', price: '$29' },
        { name: 'V-Neck', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400', price: '$29' },
        { name: 'Long Sleeve', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400', price: '$35' },
        { name: 'Graphic', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400', price: '$35' },
      ],
      collections: [
        { name: 'Classic White', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400', price: '$29', description: 'Everyday essential' },
        { name: 'Fun Graphics', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400', price: '$35', description: 'Kids favorites' },
        { name: 'Striped', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400', price: '$29', description: 'Playful style' },
        { name: 'Long Sleeve', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400', price: '$35', description: 'Year-round' },
      ],
    },
  },
}

export default function CategoryLandingPage({ params }: PageProps) {
  const { gender, category } = params
  const data = categoryData[gender]?.[category]
  
  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link href={`/category/${gender}`} className="text-muted-foreground hover:text-primary transition-colors capitalize">
              {gender}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{data.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.hero.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-full max-w-2xl">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {data.hero.title}
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Over 50,000 reviews</span>
              </div>
              <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
                {data.hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {data.hero.description}
              </p>
              <Link
                href={`/category/${gender}/${category}/design`}
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                Start Tailoring
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Start with a base style
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.styles.map((style: any, index: number) => (
              <Link
                key={index}
                href={`/category/${gender}/${category}/design`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[3/4] relative overflow-hidden bg-secondary/20">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${style.image})` }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {style.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold">{style.price}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Design your custom {category}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In just a few simple steps, create a garment that&apos;s uniquely yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Palette className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Choose Fabric & Style</h3>
              <p className="text-muted-foreground">
                Select from premium fabrics and customize every design detail
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Ruler className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Add Measurements</h3>
              <p className="text-muted-foreground">
                Provide your measurements or book a virtual fitting session
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Scissors className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. We Craft It</h3>
              <p className="text-muted-foreground">
                Expert tailors create your garment with precision and care
              </p>
            </div>
          </div>

          {/* Interactive Design Tool Preview */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-secondary via-background to-secondary flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Design Tool</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Visualize your {category} in real-time as you customize every detail
                </p>
                <Link
                  href={`/category/${gender}/${category}/design`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-all"
                >
                  Try it now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fit to Perfection Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${data.hero.image})` }}
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fit to Perfection Guaranteed
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every garment is made to your exact measurements by our expert tailors. 
                We guarantee the perfect fit or we&apos;ll remake it for free.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">20+ Body Measurements</h4>
                    <p className="text-muted-foreground">Precision tailoring for your unique shape</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Free Alterations for Life</h4>
                    <p className="text-muted-foreground">We stand behind our quality forever</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Made in 3-4 Weeks</h4>
                    <p className="text-muted-foreground">Fast turnaround without compromising quality</p>
                  </div>
                </div>
              </div>
              <Link
                href={`/category/${gender}/${category}/design`}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Get Started
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Custom Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Custom {data.name} Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Each piece is fully customizable to your preferences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {data.collections.map((item: any, index: number) => (
              <Link key={index} href={`/category/${gender}/${category}/design`} className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[3/4] relative overflow-hidden bg-secondary/20">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors">
                        Customize
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <p className="text-lg font-bold text-primary">{item.price}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-12">Featured In</h3>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
            <div className="text-3xl font-serif italic">Esquire</div>
            <div className="text-3xl font-bold">GQ</div>
            <div className="text-3xl font-serif">Forbes</div>
            <div className="text-3xl font-bold">Vogue</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to create your perfect {category}?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of satisfied customers who trust us with their custom tailoring
          </p>
          <Link
            href={`/category/${gender}/${category}/design`}
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
          >
            Start Designing Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}

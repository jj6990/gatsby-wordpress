import React from 'react';
import SliderHero from '../components/hero/SliderHero'
import CategorySlider from '../components/categorySlider/CategorySlider'
import InfoSection from '../components/infoSection/InfoSection';
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts';

export default function HomePage() {
  return (
    <>
      <SliderHero />
      <CategorySlider />
      <InfoSection />
      <FeaturedProducts />
    </>
  )
}

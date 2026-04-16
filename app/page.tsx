import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import PopularDishes from '@/components/PopularDishes';
import HowItWorks from '@/components/HowItWorks';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import MobileApp from '@/components/MobileApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedCategories />
      <PopularDishes />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <MobileApp />
      <Footer />
    </main>
  );
}

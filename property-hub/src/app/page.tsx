import Achievements from "@/components/Achievements";
import CTA from "@/components/CTA";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ListedProperties from "@/components/ListedProperties";
import Navbar from "@/components/Navbar";
import RecentlyAddedProperties from "@/components/RecentlyAddedProperties";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Featured />
        <Service />
        <ListedProperties />
        <RecentlyAddedProperties />
        <Achievements />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

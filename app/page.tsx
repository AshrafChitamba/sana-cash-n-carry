import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BigClientsSection } from "@/components/BigClientsSection";
import { HistoriesSection } from "@/components/HistoriesSection";
import { StoresSection } from "@/components/StoresSection";
import { ContactUsSection } from "@/components/ContactSection";
import  { Toaster } from "react-hot-toast";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <BigClientsSection />
      <HistoriesSection />
      <StoresSection />
      <ContactUsSection />
      <Footer />
      <Toaster />
    </main>
  );
}

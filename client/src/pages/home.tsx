import HeroSection from "@/components/home/hero-section";
import AnimatedStatsSection from "@/components/home/animated-stats-section";
import AboutSection from "@/components/home/about-section";
import CoursesSection from "@/components/home/courses-section";
import ApplicationProcess from "@/components/home/application-process";
import StudentLifeSection from "@/components/home/student-life-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import ContactSection from "@/components/home/contact-section";

interface HomeProps {
  onApplyClick: () => void;
  isModalOpen: boolean;
}

export default function Home({ onApplyClick, isModalOpen }: HomeProps) {
  return (
    <>
      <HeroSection onExploreClick={onApplyClick} />
      <AnimatedStatsSection />
      <AboutSection />
      <CoursesSection />
      <ApplicationProcess onStartApplicationClick={onApplyClick} />
      <StudentLifeSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
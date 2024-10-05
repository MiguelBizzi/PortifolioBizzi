import HeroSection from '@/components/hero/hero-section'
import ProjectsSection from '@/components/projects/projects-section'
import TestimonialsSection from '@/components/testimonials/testimonials-section'
import SkillsSection from '@/components/skills/skills-section'
import ContactSection from '@/components/contact/contact-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

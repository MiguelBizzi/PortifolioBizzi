import HeroSection from '@/components/hero/hero-section'
import ProjectsSection from '@/components/projects/projects-section'
import TestimonialsSection from '@/components/testimonials/testimonials-section'
import SkillsSection from '@/components/skills/skills-section'
import ContactSection from '@/components/contact/contact-section'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <SkillsSection />
      <ContactSection />
    </Fragment>
  )
}

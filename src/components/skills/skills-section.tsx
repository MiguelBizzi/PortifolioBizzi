'use client'

import { useSectionInView } from '@/hooks/section-in-view'
import { skills } from '@/lib/constants/skills'
import { motion, type Variants } from 'framer-motion'

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}
export default function SkillsSection() {
  const { ref } = useSectionInView('Skills')

  return (
    <div id="skills" className="mb-32 px-4" ref={ref}>
      <div className="mx-auto max-w-xl text-center">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            Technology Stack
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold">Skills</h2>
        <p className="mt-2 dark:text-white/60">Here are some of the technologies I work with.</p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl space-y-8">
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <motion.div
              className="rounded-xl border px-4 py-2 shadow-sm"
              key={skill}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useSectionInView } from '@/hooks/section-in-view'
import TestimonialCard from './testimonial-card'
import { Fragment } from 'react'

export default function TestimonialsSection() {
  const { ref } = useSectionInView('Testimonials')

  return (
    <div id="testimonials" className="my-32 px-4" ref={ref}>
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            What clients say
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold">Testimonials</h2>
        <p className="mt-2 dark:text-white/60">
          Here's what my clients have to say about working with me.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-screen-2xl space-y-8 sm:mt-20">
        <div className="[mask-image:linear-gradient(to_right, transparent, black_10%)] -my-4 flex overflow-x-clip py-4">
          <div className="animate-infinite-slider group flex flex-none gap-8 [animation-duration:30s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  )
}

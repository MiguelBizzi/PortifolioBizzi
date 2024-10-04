'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const position = window.scrollY
    if (position > 300) {
      setVisible(true)
    } else if (position <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  if (!visible) return

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Button onClick={scrollToTop} className="h-auto rounded-full p-4" variant="outline">
        <ArrowUp className="h-4 w-4" />
      </Button>
    </motion.div>
  )
}

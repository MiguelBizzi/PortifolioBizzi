'use client'

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

interface Props {
  onClick: () => void
}

export default function ScrollToNextSectionButton({ onClick }: Props) {
  const [visible, setVisible] = useState(true)

  const toggleVisible = () => {
    const position = window.scrollY

    if (position < 10) {
      setVisible(true)
    } else if (position >= 10) {
      setVisible(false)
    }
  }

  if (typeof window !== 'undefined') window.addEventListener('scroll', toggleVisible)

  if (!visible) return

  return (
    <motion.a
      href="#projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="absolute bottom-4 left-1/2 right-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
    >
      <Button onClick={onClick} className="h-auto rounded-full p-4" variant="outline">
        <ArrowDown className="h-4 w-4" />
      </Button>
    </motion.a>
  )
}

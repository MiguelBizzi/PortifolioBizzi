import type { StaticImageData } from 'next/image'

export interface Project {
  title: string
  description: string
  stack: string[]
  image: StaticImageData
}

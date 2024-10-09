import { Quote } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import type { Testimonial } from '@/lib/types/testimonials'

interface Props {
  data: Testimonial
}

export default function TestimonialCard({ data }: Props) {
  return (
    <Card className="max-w-sm transition-all hover:rotate-3 hover:scale-105 sm:max-w-[420px]">
      <CardHeader className="flex-row items-center space-x-4 pb-0">
        <Quote className="h-8 w-8 text-blue-500" />

        <div>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.field}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-4 text-sm dark:text-white/60">
        <p>{data.text}</p>
      </CardContent>
    </Card>
  )
}

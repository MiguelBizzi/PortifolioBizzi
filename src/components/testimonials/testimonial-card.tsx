import { Quote } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export default function TestimonialCard() {
  return (
    <Card className="max-w-sm transition-all hover:rotate-3 hover:scale-105">
      <CardHeader className="flex-row items-center space-x-4 pb-0">
        <Quote className="h-8 w-8 text-blue-500" />

        <div>
          <CardTitle>Miguel Bizzi</CardTitle>
          <CardDescription>CEO at Bizzi</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-4 text-sm dark:text-white/60">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellendus soluta adipisci
          incidunt? Corporis ducimus asperiores in laborum id iusto at necessitatibus quam, ut eius
          officiis dolorum quasi alias temporibus?
        </p>
      </CardContent>
    </Card>
  )
}

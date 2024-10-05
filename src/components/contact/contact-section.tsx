'use client'

import { useSectionInView } from '@/hooks/section-in-view'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'
import { ArrowRight } from 'lucide-react'

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

export default function ContactSection() {
  const { ref } = useSectionInView('Contact')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div id="contact" className="mb-16 px-4" ref={ref}>
      <div className="mx-auto max-w-xl text-center">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            Let&apos;s work together
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold">Contact</h2>
        <p className="mt-2 dark:text-white/60">
          I&apos;m currently available for work. If you have a project in mind, I&apos;d love to
          hear from you. Email: <span className="underline">migueloliveirabizzi@gmail.com</span>
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-2xl space-y-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here..."
                      className="min-h-[80px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button>
                Submit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

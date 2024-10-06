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
import { ArrowRight, LoaderCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { SectionName } from '@/hooks/active-section-provider'
import emailJs from '@emailjs/browser'
import { Fragment, useState } from 'react'
import { env } from '@/env'
import { toast } from 'sonner'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const tHeader = useTranslations('Header')
  const t = useTranslations('Contact')

  const { ref } = useSectionInView(tHeader('contact') as SectionName)

  const formSchema = z.object({
    name: z.string({
      required_error: t('form.name_required'),
    }),
    email: z
      .string({
        required_error: t('form.email_required'),
      })
      .email(t('form.email_invalid')),
    message: z.string({
      required_error: t('form.message_required'),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const templateParams = {
      from_name: values.name,
      email: values.email,
      message: values.message,
    }

    setIsSubmitting(true)

    emailJs
      .send(
        env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        templateParams,
        env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then((response) => {
        console.log(response)

        if (response.status !== 200) throw new Error()

        form.reset({
          name: '',
          email: '',
          message: '',
        })
        toast.success(t('form.success_message'), {
          description: t('form.success_description'),
        })
      })
      .catch((err) => {
        toast.error(t('form.error_message'), {
          description: t('form.error_description'),
        })

        console.log(err)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div id="contact" className="mb-16 px-4" ref={ref}>
      <div className="mx-auto max-w-xl text-center">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            {t('work_together')}
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold">{t('title')}</h2>
        <p className="mt-2 dark:text-white/60">{t('description')}</p>
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
                    <FormLabel>{t('form.name')}</FormLabel>
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
                    <FormLabel>{t('form.email')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.email_placeholder')} {...field} />
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
                  <FormLabel>{t('form.message')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('form.message_placeholder')}
                      className="min-h-[80px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button disabled={isSubmitting}>
                {isSubmitting ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  <Fragment>
                    {t('form.send_button')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Fragment>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

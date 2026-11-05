'use client'

import { useSectionInView } from '@/hooks/section-in-view'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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
import { LoaderCircle, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { SectionName } from '@/hooks/active-section-provider'
import emailJs from '@emailjs/browser'
import { useState } from 'react'
import { env } from '@/env'
import { toast } from 'sonner'
import { GradientText } from '@/components/ui/gradient-text'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const tHeader = useTranslations('Header')
  const t = useTranslations('Contact')

  const { ref } = useSectionInView(tHeader('contact') as SectionName)

  const formSchema = z.object({
    name: z
      .string({
        required_error: t('form.name_required'),
      })
      .min(1, t('form.name_required')),
    email: z
      .string({
        required_error: t('form.email_required'),
      })
      .email(t('form.email_invalid')),
    message: z
      .string({
        required_error: t('form.message_required'),
      })
      .min(1, t('form.message_required')),
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

  const inputClass = 'h-11 rounded-[10px] border-input bg-background px-3.5 text-[15px] shadow-none'

  return (
    <section
      id="contact"
      ref={ref}
      className="mx-auto mt-24 w-full max-w-[1120px] scroll-mt-28 px-6 sm:px-8 md:mt-28"
    >
      <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 sm:p-10 min-[900px]:grid-cols-2 min-[900px]:gap-14 min-[900px]:p-14">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="eyebrow">{t('eyebrow')}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[44px]">
              {t('title_lead')} <GradientText>{t('title_accent')}</GradientText>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
              {t('description')}
            </p>
          </div>
          <div className="text-[15px] leading-[1.9]">
            <a
              href="mailto:migueloliveirabizzi@gmail.com"
              className="break-all border-b border-foreground font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              migueloliveirabizzi@gmail.com
            </a>
            <p className="text-muted-foreground">{t('linkedin')}</p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[18px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">{t('form.name')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('form.name_placeholder')}
                      autoComplete="name"
                      className={inputClass}
                      {...field}
                    />
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
                  <FormLabel className="text-sm font-medium">{t('form.email')}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('form.email_placeholder')}
                      autoComplete="email"
                      className={inputClass}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">{t('form.message')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('form.message_placeholder')}
                      className="h-[120px] resize-none rounded-[10px] border-input bg-background px-3.5 py-3 text-[15px] shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-foreground text-[15px] font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
            >
              {isSubmitting ? (
                <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
              ) : (
                <Send aria-hidden="true" className="h-4 w-4" />
              )}
              {t('form.send_button')}
            </button>
          </form>
        </Form>
      </div>
    </section>
  )
}

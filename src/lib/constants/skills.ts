export type SkillGroupId =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'ai'
  | 'cloud'
  | 'testing'
  | 'payments'
  | 'practice'

export const skillGroups: { id: SkillGroupId; items: string[] }[] = [
  {
    id: 'frontend',
    items: [
      'React.js',
      'Next.js',
      'SvelteKit',
      'React Native',
      'Expo',
      'TypeScript',
      'TailwindCSS',
      'Shadcn/ui',
      'Redux',
      'React Query',
    ],
  },
  {
    id: 'backend',
    items: ['NestJS', 'Node.js', 'GoLang', 'Laravel (PHP)', 'REST APIs', 'WebSockets', 'Webhooks'],
  },
  { id: 'database', items: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'RealmDB', 'Supabase'] },
  {
    id: 'ai',
    items: ['n8n', 'LLM integration', 'AI-assisted pipelines', 'OpenAI', 'OpenClaw'],
  },
  {
    id: 'cloud',
    items: ['AWS EC2', 'Elastic Beanstalk', 'Aurora', 'CloudFront', 'Vercel', 'Docker', 'CI/CD'],
  },
  { id: 'testing', items: ['Jest', 'Cypress', 'Playwright'] },
  { id: 'payments', items: ['Fiserv', 'Clover POS', 'Stripe'] },
  { id: 'practice', items: ['Agile / Scrum', 'Tech leadership', 'Code review', 'Mentoring'] },
]

export const marqueeRows: [string[], string[]] = [
  ['React', 'Next.js', 'TypeScript', 'NestJS', 'Node.js', 'GoLang', 'PostgreSQL', 'AWS'],
  ['React Native', 'SvelteKit', 'Prisma', 'Laravel', 'n8n', 'Docker', 'Jest', 'Playwright'],
]

export interface SkillGroup {
  name: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Shadcn/UI',
      'Zustand',
      'Redux',
    ],
  },
  {
    name: 'Mobile',
    skills: ['React Native', 'Expo', 'TestFlight', 'Xcode', 'Android Studio'],
  },
  {
    name: 'Backend',
    skills: [
      'Node.js',
      'NestJS',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'BullMQ',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS EC2', 'ElastiCache', 'S3', 'Docker', 'CI/CD', 'Vercel', 'Git'],
  },
  {
    name: 'Realtime & AI',
    skills: [
      'WebSockets',
      'Server-Sent Events',
      'LLM / agentic AI integration',
      'LangChain',
    ],
  },
]

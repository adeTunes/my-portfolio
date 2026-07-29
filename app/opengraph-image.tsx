import { ImageResponse } from 'next/og'
import { profile } from './data/profile'

export const alt = 'Babatunde Adekunle — Software Engineer | Web & Mobile'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const stack = [
  'React',
  'React Native',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
]

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0b',
          color: '#f4f4f5',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#7dacff',
            }}
          >
            Software Engineer
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, marginTop: 20 }}>
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              marginTop: 20,
              maxWidth: 900,
            }}
          >
            Building web and mobile products, from the interface to the API.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  border: '1px solid #3f3f46',
                  borderRadius: 8,
                  padding: '8px 16px',
                  fontSize: 24,
                  color: '#d4d4d8',
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 24, color: '#71717a' }}>
            Lagos, Nigeria · adekunle.vercel.app
          </div>
        </div>
      </div>
    ),
    size
  )
}

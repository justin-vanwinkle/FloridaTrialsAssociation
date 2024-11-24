module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md'
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2563eb",
          "secondary": "#0891b2",
          "accent": "#f59e0b",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral.700'),
            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-links': theme('colors.primary'),
            '--tw-prose-bold': theme('colors.primary'),
            '--tw-prose-counters': theme('colors.primary'),
            '--tw-prose-bullets': theme('colors.primary'),
            maxWidth: 'none',
            h1: {
              marginBottom: '2rem',
              lineHeight: '1.2',
            },
            h2: {
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
              lineHeight: '1.3',
            },
            h3: {
              marginTop: '2rem',
              marginBottom: '1rem',
              lineHeight: '1.4',
            },
            p: {
              marginBottom: '1.5rem',
            },
            ul: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            li: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
          },
        },
      }),
    },
  },
} 
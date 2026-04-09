/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        gravity: '#c8ff00',
        'gravity-hot': '#ff3d00',
        'gravity-bg': '#080c14',
        'gravity-card': '#0f1520',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#a1a1aa',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-lead': '#d4d4d8',
            '--tw-prose-links': '#c8ff00',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#71717a',
            '--tw-prose-bullets': '#71717a',
            '--tw-prose-hr': '#27272a',
            '--tw-prose-quotes': '#ffffff',
            '--tw-prose-quote-borders': '#c8ff00',
            '--tw-prose-captions': '#71717a',
            '--tw-prose-code': '#c8ff00',
            '--tw-prose-pre-code': '#e4e4e7',
            '--tw-prose-pre-bg': '#18181b',
            '--tw-prose-th-borders': '#3f3f46',
            '--tw-prose-td-borders': '#27272a',
          },
        },
      },
    },
  },
  plugins: [],
};

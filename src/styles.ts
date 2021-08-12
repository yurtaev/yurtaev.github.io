import { createCss } from '@stitches/react'

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      bg: '#fbf1c7',
      text: '#282828',

      bgSelection: '#d3869b',
      link: '#ff2e88',
      h: '#98971a',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
    },
    fontSizes: {
      1: '1rem',
    },
    lineHeights: {
      1: '1.5rem',
    },
    sizes: {
      contentWidth: '70rem',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },

  utils: {
    marginX: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),

    marginY: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

// inspired by https://github.com/dnamsons/Kimbie-Dark-Plus
export const darkTheme = theme('dark-theme', {
  colors: {
    bg: '#221a0f',
    text: '#d3af86',
    h: '#889b4a',
    link: '#dc3958',
    bgSelection: '#98676a',
  },
})

export const globalStyles = global({
  body: {
    /* Smooth transitions between modes */
    $$duration: '0.5s',
    $$timing: 'ease',
    transition: 'color $$duration $$timing, background-color $$duration $$timing',

    backgroundColor: '$bg',
    color: '$text',
    fontSize: '$1',
    fontFamily:
      'Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif',
    lineHeight: '$1',
    margin: 0,
  },
  '::selection': {
    backgroundColor: '$bgSelection',
    color: '#fff',
  },

  a: {
    color: '$link',
    textDecoration: 'none',
    borderBottom: '1px solid',

    // '&[target="_blank"]::after': {
    //   content: '⧉',
    // },

    '&:hover': {
      backgroundColor: '$link',
      color: '#fff',
    },

    '&:visited': {
      color: '#a89984',

      '&:hover': {
        backgroundColor: '#a89984',
        color: '#fdf4c1',
      },
    },
  },

  p: {
    marginY: '$space$4',
  },

  img: {
    maxWidth: '100%',

    '&[align="center"]': {
      display: 'block',
      margin: '0 auto',
    },
  },

  blockquote: {
    position: 'relative',
    overflow: 'hidden',
    paddingLeft: '$space$4',
    margin: 0,
    marginY: '$space$4',

    '&:after': {
      content: '>\\A'.repeat(100),
      whiteSpace: 'pre',
      position: 'absolute',
      top: 0,
      left: 0,
      lineHeight: '$1',
    },
  },

  code: {
    color: '#98971a',
    fontWeight: '700',

    '&:before': {
      content: '`',
      display: 'inline',
    },

    '&:after': {
      content: '`',
      display: 'inline',
    },
  },

  'h1, h2, h3, h4, h5, h6': {
    color: '$h',
    fontSize: '$1',
  },

  h1: {
    position: 'relative',
    display: 'table-cell',
    overflow: 'hidden',
    padding: '20px 0 30px',

    '&:after': {
      content: '='.repeat(120),
      position: 'absolute',
      left: 0,
      bottom: 10,
    },
  },

  h2: {
    '&:before': {
      content: '## ',
    },
  },

  h3: {
    '&:before': {
      content: '### ',
    },
  },

  h4: {
    '&:before': {
      content: '### ',
    },
  },

  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',

    '& li': {
      position: 'relative',
      paddingLeft: '$space$4',
    },

    '& li:after': {
      content: '–',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
})

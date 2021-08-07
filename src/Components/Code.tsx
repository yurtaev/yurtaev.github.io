/* eslint-disable react/jsx-key */

import * as React from 'react'
import * as R from 'ramda'

import Highlight, { defaultProps } from 'prism-react-renderer'
import type { Language, PrismTheme } from 'prism-react-renderer'

import github from 'prism-react-renderer/themes/nightOwlLight'
import dracula from 'prism-react-renderer/themes/nightOwl'

import { useUserSettings } from '@/useUserSettings'
import { styled } from '@/styles'
import { useHasMounted } from '@/utils'

const prismBGColorLens = R.lensPath<PrismTheme, string>(['plain', 'backgroundColor'])
const lightPrismTheme = R.set(prismBGColorLens, 'inherit', github)
const darkLightTheme = R.set(prismBGColorLens, 'inherit', dracula)

const parseLanguage = (className?: string): Language => (className?.replace(/language-/, '') as Language) || null

const Pre = styled('pre', {
  // fix width for mobile display
  maxWidth: '$contentWidth',
  overflow: 'auto ',
})

export const Code: React.FC<{ children: string; className?: string }> = ({ children, ...rest }) => {
  const language = parseLanguage(rest.className)
  const { isDark } = useUserSettings()
  const hasMounted = useHasMounted()

  // inline code: `something` => <code>something</code>
  if (!language) {
    return <code>{children}</code>
  }

  // multiline code
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={isDark ? darkLightTheme : lightPrismTheme}
      // Workaround: re-render component on mount to fix theme
      key={hasMounted.toString()}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default Code

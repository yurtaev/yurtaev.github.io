/* eslint-disable react/jsx-key */

import * as React from 'react'
import * as R from 'ramda'

import { Highlight } from 'prism-react-renderer'
import { Language, PrismTheme, themes } from 'prism-react-renderer'

import { useUserSettings } from '@/useUserSettings'
import { styled } from '@/styles'
import { useHasMounted } from '@/utils'

const { github, dracula } = themes

const prismBGColorLens = R.lensPath<PrismTheme, string>(['plain', 'backgroundColor'])
const lightPrismTheme = R.set(prismBGColorLens, 'inherit', github)
const darkLightTheme = R.set(prismBGColorLens, 'inherit', dracula)

const parseLanguage = (className?: string): Language => (className?.replace(/language-/, '') as Language) || ''

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

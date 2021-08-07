import Link from 'next/link'
import * as R from 'ramda'

import { useUserSettings, isAutoTheme, isLightTheme, isDarkTheme } from '@/useUserSettings'
import type { THEME } from '@/useUserSettings'
import { styled } from '@/styles'

const getThemeIcon = R.cond<THEME, string>([
  [isAutoTheme, R.always('🌗')],
  [isLightTheme, R.always('🔆')],
  [isDarkTheme, R.always('🌙')],
])

const getThemeTitle = R.cond<THEME, string>([
  [isAutoTheme, R.always('Auto')],
  [isLightTheme, R.always('Light')],
  [isDarkTheme, R.always('Dark')],
])

const SwitchThemeButton = styled('button', {
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'inherit',
  transition: 'transform .25s',

  '&:hover': {
    transform: 'scale(2)',
  },
})

export const Navigation = styled('nav', {
  marginY: '$4',
})

export const Nav = () => {
  const { swithTheme, userTheme } = useUserSettings()
  return (
    <Navigation>
      <Link href="/">Root</Link>
      {' – '}
      <Link href="/">Blog</Link>
      {' – '}
      {/* <Link href="/">Contacts</Link>
      {' – '} */}
      <a href="/atom.xml" target="_blank">
        RSS
      </a>
      {' | '}
      <SwitchThemeButton title={`${getThemeTitle(userTheme)} theme`} onClick={swithTheme} onTouchEnd={swithTheme}>
        {getThemeIcon(userTheme)}
      </SwitchThemeButton>
    </Navigation>
  )
}

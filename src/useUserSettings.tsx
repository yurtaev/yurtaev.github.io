import { useState, useEffect, useCallback, createContext, useContext, useMemo } from 'react'
import * as R from 'ramda'

import { darkTheme } from '@/styles'
import { isSSR } from '@/utils'

import { useMediaQuery } from '@react-hook/media-query'

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
  AUTO = 'auto',
}

const THEMES = R.values(THEME)
const isValideTheme = R.includes(R.__, THEMES)

const THEME_KEY = 'theme'
const DEFAULT_THEME = THEME.DARK

export const isDarkTheme = R.equals(THEME.DARK)
export const isLightTheme = R.equals(THEME.LIGHT)
export const isAutoTheme = R.equals(THEME.AUTO)

const getUserTheme = (): THEME => {
  if (isSSR) return DEFAULT_THEME

  const theme = window.localStorage.getItem(THEME_KEY) || ''

  if (isValideTheme(theme)) {
    return theme as THEME
  } else {
    // remove if invalid
    removeUserTheme()
    return THEME.AUTO
  }
}

const saveUserTheme = (theme: THEME) => window.localStorage.setItem(THEME_KEY, theme)
const removeUserTheme = () => window.localStorage.removeItem(THEME_KEY)

export type UserSettingsContextType = {
  isDark: boolean
  swithTheme: () => void
  userTheme: THEME
}

export const UserSettingsContext = createContext<UserSettingsContextType>({
  isDark: true,
  userTheme: THEME.DARK,
  swithTheme: () => {},
})
export const useUserSettings = () => useContext(UserSettingsContext)

export const UserSettingsProvider: React.FC = ({ children }) => {
  const [userTheme, setUserTheme] = useState(getUserTheme())
  const isDarkPrefersColorSchema = useMediaQuery('(prefers-color-scheme: dark)')

  const isDark = R.cond<THEME, boolean>([
    [isAutoTheme, R.always(isDarkPrefersColorSchema)],
    [isDarkTheme, R.always(true)],
    [isLightTheme, R.always(false)],
  ])(userTheme)

  const swithTheme = useCallback(() => {
    setUserTheme((prevUserTheme) => {
      // auto 🌗 => 🌙
      // light 🔆 => auto 🌗
      // dark 🌙 => light 🔆
      const newUserTheme = R.cond<THEME, THEME>([
        [isDarkTheme, R.always(THEME.LIGHT)],
        [isAutoTheme, R.always(THEME.DARK)],
        [isLightTheme, R.always(THEME.AUTO)],
      ])(prevUserTheme)

      if (isAutoTheme(newUserTheme)) {
        removeUserTheme()
      } else {
        saveUserTheme(newUserTheme)
      }

      return newUserTheme
    })
  }, [])

  /* add or remove class to body to change theme */
  useEffect(() => {
    const body = document.querySelector('body')

    if (!body || isSSR) return

    if (isDark) {
      body.classList.add(darkTheme)
    } else {
      body.classList.remove(darkTheme)
    }
  }, [isDark, isDarkPrefersColorSchema])

  const value = useMemo(() => ({ isDark, swithTheme, userTheme }), [isDark, swithTheme, userTheme])

  return <UserSettingsContext.Provider value={value}>{children}</UserSettingsContext.Provider>
}

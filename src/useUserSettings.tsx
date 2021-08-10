import { useCallback, createContext, useContext, useMemo } from 'react'
import * as R from 'ramda'

import { useTheme } from 'next-themes'

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

// UseThemeProps not exported from `next-themes`
// https://github.com/pacocoursey/next-themes/pull/55
interface UseThemeProps extends ReturnType<typeof useTheme> {
  themes: THEME[]
  theme: THEME
  systemTheme: THEME.DARK | THEME.LIGHT
}

export const isDarkTheme = R.equals(THEME.DARK)
export const isLightTheme = R.equals(THEME.LIGHT)
export const isSystemTheme = R.equals(THEME.SYSTEM)

// auto 🌗 => 🌙
// light 🔆 => auto 🌗
// dark 🌙 => light 🔆
export const getNextTheme = R.cond<THEME, THEME>([
  [isDarkTheme, R.always(THEME.LIGHT)],
  [isSystemTheme, R.always(THEME.DARK)],
  [isLightTheme, R.always(THEME.SYSTEM)],
])

export type UserSettingsContextType = {
  isDark: boolean
  swithTheme: () => void
  theme: THEME
}

export const UserSettingsContext = createContext<UserSettingsContextType>({
  isDark: true,
  theme: THEME.DARK,
  swithTheme: () => {},
})
export const useUserSettings = () => useContext(UserSettingsContext)

export const UserSettingsProvider: React.FC = ({ children }) => {
  const { theme, setTheme, systemTheme } = useTheme() as UseThemeProps

  const isDark = R.cond<THEME, boolean>([
    [isSystemTheme, R.always(isDarkTheme(systemTheme))],
    [isDarkTheme, R.always(true)],
    [isLightTheme, R.always(false)],
  ])(theme)

  const swithTheme = useCallback(() => {
    setTheme(getNextTheme(theme))
  }, [theme, setTheme])

  const value = useMemo(() => ({ isDark, swithTheme, theme }), [isDark, swithTheme, theme])

  return <UserSettingsContext.Provider value={value}>{children}</UserSettingsContext.Provider>
}

import { THEME, isDarkTheme, isLightTheme, isSystemTheme, getNextTheme } from './useUserSettings'

test('Themes', () => {
  expect(THEME).toMatchInlineSnapshot(`
    Object {
      "DARK": "dark",
      "LIGHT": "light",
      "SYSTEM": "system",
    }
  `)
})

test('isDarkTheme', () => {
  expect(isDarkTheme(THEME.DARK)).toBeTruthy()
})

test('isLightTheme', () => {
  expect(isLightTheme(THEME.LIGHT)).toBeTruthy()
})

test('isSystemTheme', () => {
  expect(isSystemTheme(THEME.SYSTEM)).toBeTruthy()
})

test('getNextTheme', () => {
  expect(getNextTheme(THEME.DARK)).toEqual(THEME.LIGHT)
  expect(getNextTheme(THEME.LIGHT)).toEqual(THEME.SYSTEM)
  expect(getNextTheme(THEME.SYSTEM)).toEqual(THEME.DARK)
})

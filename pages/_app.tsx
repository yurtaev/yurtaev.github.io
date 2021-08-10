import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'

import { globalStyles, darkTheme } from '@/styles'
import { Container, Footer, Nav, Main, Header } from '@/Components'
import { UserSettingsProvider } from '@/useUserSettings'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider attribute="class" value={{ light: 'light', dark: darkTheme }}>
      <UserSettingsProvider>
        <Container>
          <Header>
            <Nav />
          </Header>
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </Container>
      </UserSettingsProvider>
    </ThemeProvider>
  )
}
export default MyApp

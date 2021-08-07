import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles'
import { Container, Footer, Nav, Main, Header } from '@/Components'
import { UserSettingsProvider } from '@/useUserSettings'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
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
  )
}
export default MyApp

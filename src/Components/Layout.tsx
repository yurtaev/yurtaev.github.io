import { styled } from '../styles'

export const Container = styled('div', {
  maxWidth: '$contentWidth',
  margin: '0 auto',
  padding: '0 1rem',

  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const Main = styled('main', {
  flex: 1,
  height: 'auto',
})

export const Header = styled('header', {})

export * from './useHasMounted'

/* Convert date to year=yyyy month=mm day=dd */
export const parseDate = (date: Date) => ({
  year: date.getFullYear().toString(),
  month: String(date.getMonth() + 1).padStart(2, '0'),
  day: String(date.getDate()).padStart(2, '0'),
})

/* Convert date to `yyyy-mm-dd` */
export const formatDate = (date: string): string => new Date(date).toISOString().split('T')[0]

export const isSSR = typeof window === 'undefined'

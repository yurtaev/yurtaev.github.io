import { useState, useEffect } from 'react'

export const useHasMounted = () => {
  const [hasMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return hasMounted
}

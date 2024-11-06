import { useState, useCallback } from "react"

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

export const useRandomColor = () => {
  const [backgroundColor, setBackgroundColor] = useState(generateRandomColor)

  const handleChangeColor = useCallback(() => {
    setBackgroundColor(generateRandomColor())
  }, [])

  return { backgroundColor, handleChangeColor }
}

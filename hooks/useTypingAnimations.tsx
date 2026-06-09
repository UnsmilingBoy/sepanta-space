"use client"

import { useEffect, useState } from "react"

export function useTypingAnimation(text: string, speed = 30, delay = 0) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++

        setDisplayedText(text.slice(0, index))

        if (index >= text.length) {
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => {
      clearTimeout(startTimeout)
    }
  }, [text, speed, delay])

  return displayedText
}

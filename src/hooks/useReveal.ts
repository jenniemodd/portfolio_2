import { useEffect, useRef, useState } from "react"

type RevealOptions = {
  /** Hur stor del av elementet som ska synas innan det visas (0–1). */
  threshold?: number
  /** Krymper/utökar ytan som räknas som "i bild", t.ex. för att trigga lite senare. */
  rootMargin?: string
}

type RevealState = "hidden" | "visible"

/**
 * Visar ett element med en mjuk animation när det scrollas in i bild.
 *
 * Sprid resultatet på elementet: `<section {...reveal}>`.
 * Lägg till `data-reveal-mode="group"` för att istället animera
 * elementets barn ett i taget (t.ex. kort i en lista).
 *
 * Själva animationen ligger i index.css. Utan JavaScript eller med
 * "minska rörelse" aktiverat syns innehållet direkt.
 */
export function useReveal<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
}: RevealOptions = {}) {
  const ref = useRef<T>(null)
  const [state, setState] = useState<RevealState>("hidden")

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible")
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, "data-reveal": state } as const
}

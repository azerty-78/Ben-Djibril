import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

type CountUpProps = {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

function CountUp({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const currentCount = startValue + (end - startValue) * progress
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  )
}

export default CountUp

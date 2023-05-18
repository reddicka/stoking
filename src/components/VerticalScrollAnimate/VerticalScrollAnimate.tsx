import { ReactNode } from "react"
import {
    motion,
    useTransform,
    useMotionValue,
    useAnimationFrame, wrap
} from "framer-motion"


type ScrollAnimateProps = {
    children: ReactNode
    baseVelocity: number
    className?: string
}

export const VerticalScrollAnimate = (
    {
        children,
        baseVelocity = 100,
        className
    }: ScrollAnimateProps
) => {
    const baseY = useMotionValue(0)

    const y = useTransform(baseY, (value) => `${wrap(0, -1500, value)}px`)

    useAnimationFrame((time, delta) => {
        let moveBy = baseVelocity * (delta / 1000)
        baseY.set(baseY.get() + moveBy)
    })

    return (
        <motion.div
            className={className}
            style={{ y }}
        >
            {children}
            {children}
        </motion.div>
    )
}


import {
    motion,
    useTransform,
    useMotionValue,
    useAnimationFrame, wrap
} from "framer-motion"
import { ReactNode } from "react"


type ScrollAnimateProps = {
    children: ReactNode
    baseVelocity: number
    className?: string
}

export const HorizontalScrollAnimate = (
    {
        children,
        baseVelocity = 100,
        className
    }: ScrollAnimateProps
) => {
    const baseY = useMotionValue(0)

    const x = useTransform(baseY, (value) => `${wrap(-2160, 0, value)}px`)

    useAnimationFrame((time, delta) => {
        let moveBy = baseVelocity * (delta / 1000)
        baseY.set(baseY.get() + moveBy)
    })

    return (
        <motion.div
            className={className}
            style={{ x }}
        >
            {children}
            {children}
        </motion.div>
    )
}


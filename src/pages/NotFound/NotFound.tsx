import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const NotFound: FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/")
        }, 2000)

        return () => clearTimeout(timeout)
    })

    return (
        <p>404 NotFound</p>
    )
}

export default NotFound
import { ReactNode } from "react"

interface Props {
    children:ReactNode
}

const Container = ({children}:Props) => {
  return (
    <div className=" py-10 px-5" >{children}</div>
  )
}

export default Container
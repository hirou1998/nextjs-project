import React from "react"

export type ButtonType = {
  title: string
  onClick: VoidFunction
}

const Button: React.FC<ButtonType> = ({title, onClick}) => {
  return (
    <button onClick={onClick}>{title}</button>
  )
}

export default Button

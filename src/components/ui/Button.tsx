import { ButtonHTMLAttributes } from 'react'

export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`btn-brass ${className || ''}`} {...props}>
      {children}
    </button>
  )
}

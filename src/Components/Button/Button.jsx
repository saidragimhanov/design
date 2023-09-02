import './button.css'
export const Button = (props) => {
  const { children } = props

  return <button className="style">{children}</button>
}

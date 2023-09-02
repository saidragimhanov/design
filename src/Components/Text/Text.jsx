import clsx from 'clsx'
import s from './text.module.css'

export const VARIANTS = {
  TEXT: 'text',
  TITLE: 'title',
}

export const Text = (props) => {
  const { Variant = 'title', children, className = '', uppercase = false } = props

  const mods = {
    uppercase: uppercase,
  }
  console.log(s)

  if (Variant === VARIANTS.TITLE) {
    return <h1 className={clsx(s.style, className, mods)}>{children}</h1>
  }

  if (Variant === VARIANTS.TEXT) {
    return <p className={clsx('paragraph', className, mods)}>{children}</p>
  }
}

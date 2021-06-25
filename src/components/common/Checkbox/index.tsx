import { ChangeEvent, ReactNode, useState } from 'react'

import styles from './Checkbox.module.sass'
import IconCheck from 'assets/icons/gl_check.svg'

interface Props {
  id?: string
  name?: string
  disabled?: boolean
  label?: string
  accesoryLeft?: ReactNode
  accesoryRight?: ReactNode
  onChange?: (checked: boolean) => void
}

export const Checkbox = ({
  id,
  name,
  disabled,
  accesoryLeft,
  accesoryRight,
  label,
  onChange,
}: Props) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    onChange?.call(null, event.target.checked)
  }

  return (
    <label className={styles.Checkbox}>
      {label || accesoryLeft}
      <input
        id={id}
        name={name}
        disabled={disabled}
        type="checkbox"
        className={styles.Checkbox_input}
        onChange={handleChange}
      />
      <span className={styles.Checkbox_square}>
        {checked && <img src={IconCheck} alt="Ícono de check" />}
      </span>
      {label || accesoryRight}
    </label>
  )
}

import styles from './Button.module.sass'
import cn from 'classnames';

interface Props {
  title?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  title,
  disabled,
  ...rest

}: Props) => {
  const classNames = cn(
    styles.Button,
    {
      [styles.Button_disabled]: disabled,
    }
  )

  return (
    <button
      className={classNames}
      {...rest}
      disabled={disabled}
    >
      <span className={styles.Button_title}>
        {title}
      </span>
    </button>
  )
}

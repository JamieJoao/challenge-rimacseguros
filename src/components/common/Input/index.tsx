import { Grid } from 'components/layout'
import { ChangeEvent, useEffect } from "react";
import { useRef } from "react";

import Dropdown, { Option } from 'react-dropdown'
import cn from 'classnames';

import styles from './Input.module.sass'
import 'react-dropdown/style.css'

import ArrowUp from 'assets/icons/gl_arrow_up.svg'
import ArrowDown from 'assets/icons/gl_arrow_down.svg'

interface Props {
  label?: string
  type?: string
  id?: string
  name?: string
  value?: string
  floating?: boolean
  dropdown?: any[]
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
  hasError?: string
  disabled?: boolean
}

export const Input = ({
  label,
  type = 'text',
  id,
  name,
  value,
  floating,
  dropdown,
  hasError,
  onChange,
  disabled,

}: Props) => {

  const inputRef = useRef<HTMLInputElement>()
  const hasDropdown = !!dropdown
  const classNames = cn(
    styles.Input,
    {
      [styles.has_error]: !!hasError,
      [styles.has_disabled]: disabled
    }
  )

  useEffect(() => {

  }, [])

  const handleChangeDropdown = ({ value }: Option) => {
    console.log(value)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.call(null, event)
  }

  return (
    <div className={styles.Input_wrapper}>
      <div className={classNames}>
        <Grid container>
          <Grid item xs={hasDropdown ? 4 : 12}>
            {!!dropdown && (
              <Dropdown
                className={styles.Input_dropdown_root}
                controlClassName={styles.Input_dropdown_control}
                placeholderClassName={styles.Input_dropdown_placeholder}
                arrowOpen={<img src={ArrowUp} alt='Ícono de dropdown abierto' />}
                arrowClosed={<img src={ArrowDown} alt='Ícono de dropdown cerrado' />}
                options={dropdown}
                placeholder="DOC"
                onChange={handleChangeDropdown} />
            )}
          </Grid>
          <Grid item xs={hasDropdown ? 8 : 12}>
            {floating && (
              <label htmlFor="">
                {label}
              </label>
            )}
            <input
              ref={(ref: any) => inputRef.current = ref}
              type={type}
              id={id}
              name={name}
              placeholder={label}
              onChange={handleChange}
              value={value}
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </div>

      {!!hasError && <span className={styles.Input_error}>{hasError}</span>}
    </div>
  )
}

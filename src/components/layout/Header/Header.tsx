import { useBreakpoint } from 'hooks'
import { Grid, Container } from "components/layout"
import { parameters } from 'constants/parameters'

import RimacLogo from 'assets/icons/logo-rimac.svg'
import PhoneIcon from 'assets/icons/gl_phone-20x20.svg'

import styles from './Header.module.sass'

export const Header = () => {
  const { device } = useBreakpoint()

  return (
    <div className={styles.Header}>
      <Container>
        <Grid container>
          <Grid item xs={6} className={styles.left_side}>
            <img src={RimacLogo} alt='logo de rimac' />
          </Grid>
          <Grid item xs={6} className={styles.right_side}>

            {device !== 'xs' && <span className={styles.some_question}>¿Tienes alguna duda?</span>}
            <img src={PhoneIcon} alt='ícono de teléfono' />
            <span className={styles.phone_number}>
              {device === 'xs' ? 'LLámanos' : parameters.phoneContact}
            </span>

          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

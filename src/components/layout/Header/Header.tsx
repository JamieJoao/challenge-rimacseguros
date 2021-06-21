// import React from 'react'
// import { Row, Col } from "react-flexbox-grid";
// import { useMediaQuery } from "hooks";
// import './styles.scss'
// import { Container } from '../Container/Container';
// import { useTheme } from 'hooks/useTheme';
// import { parameters } from 'constants/index';

import { Grid, Container } from "components/layout";

import RimacLogo from 'assets/icons/logo-rimac.svg'
import PhoneIcon from 'assets/icons/gl_phone-20x20.svg'

import styles from './Header.module.sass'

export const Header = () => {

  // const { colors } = useTheme()
  // const { isMobile } = useMediaQuery()

  return (
    <div className={styles.Header}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <img src={RimacLogo} alt='Logo Rimac' />
          </Grid>
          <Grid item xs={6} className={styles.Header_contact_phone}>
            <img src={PhoneIcon} alt='Ícono de teléfono' />
            <div className={styles.Header_phone_number}>
              <span>Llámanos</span>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* <Container>
        <Row>
          <Col xs>
            <img src={RimacLogo} alt='Logo Rimac' />
          </Col>

          <Col xs>
            <div className="header-right">

              {!isMobile && (
                <span
                  className='have-question'
                  style={{ color: colors.placeholder[1] }}
                >¿Tienes alguna duda?</span>
              )}

              <img src={PhoneIcon} alt='Ícono de teléfono' />
              <div
                className='phone-number'
                style={{ color: colors.purple[0] }}
              >
                <span>
                  {isMobile ? 'Llámanos' : parameters.phoneContact}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  )
}

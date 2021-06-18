import React from 'react'
import { Row, Col } from "react-flexbox-grid";
import { useMediaQuery } from "hooks";

import './styles.scss'

import RimacLogo from 'assets/icons/logo-rimac.svg'
import PhoneIcon from 'assets/icons/gl_phone-20x20.svg'
import { Container } from '../Container/Container';
import { useTheme } from 'hooks/useTheme';
import { parameters } from 'constants/index';

export const Header = () => {

  const { colors } = useTheme()
  const { isMobile } = useMediaQuery()

  return (
    <div className='r-header'>
      <Container>
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
      </Container>
    </div>
  )
}

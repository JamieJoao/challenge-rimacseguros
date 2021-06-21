// import React from 'react'
// import { Grid, Row, Col } from "react-flexbox-grid";

import { Header } from "components/layout";
// import { Text } from "components/common";
// import { useTheme } from 'hooks/useTheme';
// import { useMediaQuery } from 'hooks/useMediaQuery';

// import Image1Mobile from 'assets/images/img-1-mobile.svg'
// import './styles.scss'

import styles from './Home.module.scss'

export const HomeView = () => {

  // const { colors: { background } } = useTheme()
  // const { isMobile } = useMediaQuery()

  return (
    <div className={styles.Home}>
      <Header />

      {/* <div
        style={{
          backgroundColor: background[0],
        }}
        className='jumbotron'
      >
        <Container>
          <Row>
            <Col xs={9}>
              <Text size={isMobile ? 10 : 12} weight='bold' transform='uppercase' block style={{ marginTop: '40px' }}>
                ¡Nuevo!
              </Text>

              <div
                style={{
                  marginTop: 8,
                  marginBottom: 12,
                }}
              >
                <div>
                  <Text size={28}>
                    Seguro
                  </Text>
                  <Text
                    color={isMobile ? 'gray-bold' : 'red'}
                    size={isMobile ? 28 : 36}
                    style={{ marginLeft: '6px' }}
                  >
                    Vehicular
                  </Text>
                </div>
                <Text color='red' size={28} block>
                  Tracking
                </Text>
              </div>

              <Text size={14} color='gray-soft' style={{ marginBottom: '56px', }} block>
                Cuéntanos donde le harás mantenmiento a tu seguro
              </Text>
            </Col>
            <Col xs={3}>
              <img className='image-woman' src={Image1Mobile} alt='Imagen mujer y automovil' />
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  )
}

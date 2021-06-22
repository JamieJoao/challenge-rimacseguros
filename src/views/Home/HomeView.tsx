import { useBreakpoint } from 'hooks/useBreakpoint';
import { Header, Container, Grid } from "components/layout";

import Image1Mobile from 'assets/images/img-1-mobile.svg'
import styles from './Home.module.sass'

export const HomeView = () => {
  const { device } = useBreakpoint()

  return (
    <div className={styles.Home}>
      <Header />

      <Grid container>
        <Grid item xs={12} sm={4}>
          <div className={styles.jumbotron}>
            <Container>
              <Grid container>
                <Grid item xs={8}>
                  <div className={styles.text_new}>NUEVO!</div>
                  <div className={styles.description}>
                    <span className={styles.text_secure}>Seguro</span>
                    <span className={styles.text_vehicle}>Vehicular</span>
                    <span className={styles.text_track}>Tracking</span>
                  </div>
                  <span className={styles.text_comment}>Cuéntanos donde le harás seguimiento a tu seguro</span>
                </Grid>
                <Grid item xs={4}>
                  <img className={styles.image_woman} src={Image1Mobile} alt='Imagen mujer y automovil' />
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Container className={styles.form}>
            <span className={styles.text_title}>Déjanos tus datos</span>

            <form>
              
            </form>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

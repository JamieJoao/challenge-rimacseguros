import { useSession } from 'context/session/SessionContext';
import { Header, Container } from 'components/layout'

import styles from './CarData.module.sass'

export const CarDataView = () => {
  const { user } = useSession()

  return (
    <>
      <Header />

      <Container>
        <div className={styles.Data_greetings}>
          <span className={styles.Data_hi}>¡Hola, </span>
          <span className={styles.Data_name}>{user.name}!</span>
        </div>
      </Container>
    </>
  )
}

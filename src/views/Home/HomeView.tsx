import { useState } from 'react';
import { useFormik } from 'formik'
import validator from 'validator'

import { Input, Button, Checkbox } from 'components/common';
import { useFetch } from 'hooks/useFetch';
import { Header, Container, Grid } from "components/layout";
import { DNI_REGEX } from 'constants/index';

import Image1Mobile from 'assets/images/img-1-mobile.svg'
import styles from './Home.module.sass'

export const HomeView = () => {
  const { getUser, loading } = useFetch()
  const [availableButton, setAvailableButton] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nrodoc: '78695362',
      phone: '024-648-3804',
      plate: '',
    },
    validate({ nrodoc, phone, plate }) {
      const validatedErrors: any = {}

      if (!DNI_REGEX.test(nrodoc)) {
        validatedErrors.nrodoc = 'Documento inválido'
      }
      else if (validator.isEmpty(nrodoc)) {
        validatedErrors.nrodoc = 'Requerido'
      }

      if (validator.isEmpty(phone)) {
        validatedErrors.phone = 'Requerido'
      }

      if (validator.isEmpty(plate)) {
        validatedErrors.plate = 'Requerido'
      }

      setAvailableButton(Object.keys(validatedErrors).length === 0)

      return validatedErrors
    },
    onSubmit(data) {
      getUser(data)
    }
  })

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

            <form onSubmit={handleSubmit}>
              <Input
                id='nrodoc'
                name='nrodoc'
                label='Nro. de doc'
                dropdown={[
                  'DNI',
                ]}
                value={values.nrodoc}
                onChange={handleChange}
                hasError={errors.nrodoc}
                disabled={loading}
              />
              <Input
                id='phone'
                name='phone'
                label='Celular'
                value={values.phone}
                onChange={handleChange}
                hasError={errors.phone}
                disabled={loading}
              />
              <Input
                id='plate'
                name='plate'
                label='Placa'
                value={values.plate}
                onChange={handleChange}
                hasError={errors.plate}
                disabled={loading}
              />

              <div className={styles.accept}>
                <Checkbox
                  accesoryRight={(
                    <>
                      <span>Acepto la </span>
                      <a href='/#'>Política de Protección de Datos Personales</a>
                      <span> y los </span>
                      <a href='/#'>Términos y condiciones</a>
                    </>
                  )}
                  onChange={setAcceptTerms} />
              </div>

              <Button title='cotízalo' type='submit' disabled={loading || !availableButton || !acceptTerms} />
            </form>
          </Container>
        </Grid>
      </Grid>

      {/* <div>{JSON.stringify(values, null, 3)}</div> */}
      {/* <div>{JSON.stringify(errors, null, 3)}</div> */}
    </div>
  )
}

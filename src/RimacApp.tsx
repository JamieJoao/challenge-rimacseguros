import { MainRoute } from "routes";
import { AppState } from 'components/layout';

import 'styles/global.sass'

const RimacApp = () => {
  return (
    <AppState>
      <MainRoute />
    </AppState>
  )
}

export default RimacApp
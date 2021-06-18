import React from 'react'

import { MainRoute } from "./routes";
import { AppState } from './components/layout';

const RimacApp = () => {
  return (
    <AppState>
      <MainRoute />
    </AppState>
  )
}

export default RimacApp
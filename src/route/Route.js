import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import * as fixedData from '../helper/settings'
import { getFullRoute } from '../helper/utility'
import WebRoute from './WebRoute'

// #region Import Pages (Admin)
import Form from '../pages/admin/collection/Form'
import Login from '../pages/admin/auth/Login'
import Register from '../pages/admin/auth/Register'
import NftTokenList from '../pages/admin/nftToken/NftTokenList'
import Test from '../pages/admin/web3Integration/Test'
//#endregion

//#region Import pages (Web)
import WebHome from '../pages/web/Home'
import ProductDetail from '../pages/web/Home/ProductDetail'
//#endregion

import Landing from '../pages/Landing'
import FourZeroFour from '../pages/FourZeroFour'

const {
  web: { webLandingRoute, webProductDetailRoute },
  auth: { loginRoute, registerRoute },
  formRoute,
  nftTokenListRoute,
  testRoute
} = fixedData.routeName

const Routes = () => {
  // const { isLoading, response } = useMetaInformation()

  return (
    <BrowserRouter>
      <Switch>
        {/* ======== Admin ======== */}
        <Route exact path='/' component={Landing} />
        <Route exact path={getFullRoute(formRoute)} component={Form} />
        <Route exact path={getFullRoute(loginRoute)} component={Login} />
        <Route exact path={getFullRoute(nftTokenListRoute)} component={NftTokenList} />
        <Route exact path={getFullRoute(registerRoute)} component={Register} />
        <Route exact path={getFullRoute(testRoute)} component={Test} />
        {/* ======== Web ======== */}
        <WebRoute exact path={getFullRoute(webLandingRoute)} component={WebHome} />
        <WebRoute exact path={getFullRoute(webProductDetailRoute)} component={ProductDetail} />

        <Route exact path='*' component={FourZeroFour} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Routes

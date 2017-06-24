import React from 'react'
import { render } from 'react-dom'
import { Router, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import './postcss/styles.sss'

import routes from './routes'
import configureStore from './store/configureStore'
const appHistory = useRouterHistory(createHashHistory)()
const store = configureStore()
const Root = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={appHistory} routes={routes} />
  </Provider>
  , Root
)

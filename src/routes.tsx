/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext } from 'react'

import { Route, Switch, useLocation } from 'react-router'

import Auth from './pages/Auth/index'
import Home from './pages/Home/index'
import Repositories from './pages/Repos/index'

import { AuthContext } from './context/AuthContext'

export default function Routes() {
  const { useUser } = useContext(AuthContext)

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery()
  const user = query.get('user')

  return (
    <Switch>
      <Route
        path="/"
        component={!useUser ? Auth : user! ? Repositories : Home}
        exact
      />
    </Switch>
  )
}

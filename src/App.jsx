import React from 'react'
import Main from './pages/Main'
import Edit from './pages/Edit'
import Add from './pages/Add'
import { Switch, Route } from 'react-router-dom'
import Wrapper from './reducer/provider'

const App = () => {
  return (
    <>
      <Switch>
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route path="/edit" component={Edit} />
          <Route path="/add" component={Add} />
        </Wrapper>
      </Switch>
    </>
  )
}

export default App

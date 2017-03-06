import React from 'react'

import Header from './header/Header'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        {this.props.children}
      </div>
    )
  }
}

export default App

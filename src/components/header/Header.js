import React from 'react'
import { WindowResizeListener } from 'react-window-resize-listener'
import $ from 'jquery'

import BotonNavegador from './BotonNavegador'
import Menu from './Menu'
import Title from './Title'

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      open: false,
      menu: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({
      open: !this.state.open
    })
  }

  handleClose () {
    $('#menu').css({'opacity': 0})
    $('#menu-lateral').css({'left': '-200px'})
    setTimeout(() => {
      this.setState({open: false})
    }, 500)
  }

  render () {
    let botones = (
      <div className='contenedor-navegador'>
        <BotonNavegador
          to={'/'}
          pathname={this.props.pathname}
          name={'Home'}
        />
        <BotonNavegador
          to={'/private'}
          pathname={this.props.pathname}
          name={'Private'}
        />
      </div>
    )

    if (this.state.menu) {
      botones = null
    }

    let menu = null

    if (this.state.open) {
      menu = (
        <Menu handleClose={this.handleClose} pathname={this.props.pathname} />
      )
    }

    return (
      <div>
        <WindowResizeListener
          onResize={windowSize => {
            if (windowSize.windowWidth > 800) {
              this.setState({
                menu: false
              })
            } else if (windowSize.windowWidth <= 800) {
              this.setState({
                menu: true
              })
            }
          }}
        />
        <header>
          <Title
            menu={this.state.menu}
            titulo={'React Started'}
            handleToggle={this.handleToggle}
          />
          {botones}
        </header>
        {menu}
      </div>
    )
  }
}

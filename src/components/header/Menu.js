import React from 'react'

import BotonMenu from './BotonMenu'

class Menu extends React.Component {
  render () {
    return (
      <div id='menu' className='menu'>
        <div id='menu-fondo' className='menu-fondo'onClick={this.props.handleClose} />
        <div id='menu-lateral' className='menu-lateral'>
          <BotonMenu
            to={'/'}
            pathname={this.props.pathname}
            name={'Home'}
            handleClose={this.props.handleClose}
          />
          <BotonMenu
            to={'/private'}
            pathname={this.props.pathname}
            name={'Private'}
            handleClose={this.props.handleClose}
          />
        </div>
      </div>
    )
  }
}

export default Menu

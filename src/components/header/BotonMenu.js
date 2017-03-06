import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

const BotonMenu = ({to, pathname, name, handleClose}) => {
  return (
    <Link
      to={to}
      id='boton-menu'
      className={classNames(pathname === to ? 'boton-menu boton-menu-active' : 'boton-menu')}
      onClick={handleClose}
    >
      {name}
    </Link>
  )
}

BotonMenu.proptypes = {
  to: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default BotonMenu

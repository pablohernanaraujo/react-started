import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

const BotonNavegador = ({to, pathname, name}) => (
  <Link
    to={to}
    className={classNames(pathname === to ? 'boton-navegador boton-navegador-active' : 'boton-navegador')}
  >
    <div className='ripple-contenedor'>
      <span className='ripple-efecto' />
    </div>
    {name}
  </Link>
)

BotonNavegador.proptypes = {
  to: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default BotonNavegador

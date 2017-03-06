import React, { PropTypes } from 'react'

const Title = ({menu, titulo, handleToggle}) => {
  if (menu) {
    return (
      <div className='contenedor-header-titulo'>
        <a
          id='menu-icono'
          className='menu-icono'
          onClick={handleToggle}
        >
          <i className='fa fa-bars fa-lg' aria-hidden='true' />
        </a>
        <div className='header-titulo'>{titulo}</div>
      </div>
    )
  } else {
    return (
      <div className='contenedor-header-titulo'>
        <div className='header-titulo'>{titulo}</div>
      </div>
    )
  }
}

Title.proptypes = {
  menu: PropTypes.boolean,
  titulo: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default Title

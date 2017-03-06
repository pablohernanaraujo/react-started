import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import $ from 'jquery'

const BotonNavegador = ({to, pathname, name}) => {
  const $ripple = $('.ripple-contenedor')

  $ripple.on('click', function (e) {
    let $this = $(this)
    let $offset = $this.parent().offset()
    let $circle = $this.find('.ripple-efecto')

    let x = e.pageX - $offset.left
    let y = e.pageY - $offset.top

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    })

    $this.addClass('ripple-efecto-animacion')
  })
  $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function (e) {
    $(this).removeClass('ripple-efecto-animacion')
  })

  return (
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
}

BotonNavegador.proptypes = {
  to: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default BotonNavegador

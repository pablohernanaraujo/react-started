import React from 'react'

export default class HomePage extends React.Component {
  render () {
    return (
      <div className='contenedor'>
        <div className='fila'>
          <div className='check-contenedor'>
            <i className='fa fa-check' />
            <div className='check-subtitulo'>Webpack</div>
          </div>
          <div className='check-contenedor'>
            <i className='fa fa-check' />
            <div className='check-subtitulo'>Postcss, cssnext y font awesome</div>
          </div>
          <div className='check-contenedor'>
            <i className='fa fa-check' />
            <div className='check-subtitulo'>React router</div>
          </div>
          <div className='check-contenedor'>
            <i className='fa fa-check' />
            <div className='check-subtitulo'>Redux, React redux, Redux thunk y Firebase</div>
          </div>
        </div>
      </div>
    )
  }
}

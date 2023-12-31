import image from '../Asserts/Imgs/callsense.PNG'
function Projects() {
  return (
    <div className={'bg-dark'}>
      <div className='row d-flex align-items-center justify-content-between container'>
        <div className='col-sm-12 col-lg-6 col-md-12'>
          <h1 className={'text-white'}>Experienced Projects</h1>
        </div>
        <div className='col-sm-12 col-lg-6 col-md-12'>
          <button className='btn btn-light'>view all projects</button>
        </div>
      </div>
      <div className='container row'>
        <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-3'>
          <div className='card' style={{ width: '18rem' }}>
            <img className='card-img-top' src={image} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-dark'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-3'>
          <div className='card' style={{ width: '18rem' }}>
            <img className='card-img-top' src={image} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-dark'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-3'>
          <div className='card' style={{ width: '18rem' }}>
            <img className='card-img-top' src={image} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-dark'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

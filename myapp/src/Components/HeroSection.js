import Carousel from 'react-bootstrap/Carousel'
import img from './../Asserts/Imgs/callsense.PNG'
function HeroSection() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img
          height={400}
          className='d-block w-100'
          src={img}
          alt='First slide'
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroSection

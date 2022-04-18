import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/IMG_2483.jpg';
import img2 from '../../assets/images/IMG_2444.jpg';
import img3 from '../../assets/images/IMG_2447.jpg';

function Home() {
  return (
    <div className="carouselContainer">
      <div className="innerCarouselContainer">
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h5>LET'S PLAY!</h5>
              <p>How about signing up?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h5>NEED A TEAM?</h5>
              <p>
                You can also sign up as an individual and we can put you on a
                team
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h5>YOU CAN BE A FREE AGENT</h5>
              <p>
                The registration link will be posted when registration opens for
                each league.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

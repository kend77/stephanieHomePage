import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import './carousel.css'
import { withRouter } from 'react-router'
import { Modal, Image } from 'semantic-ui-react'

class Carousel extends Component {

  constructor() {
    super()
    this.state = {
      slideNumber: 0,
      currentSlide: 0
    }
    this.onOpen = this.onOpen.bind(this)
  }

  onOpen() {
    document.addEventListener('touchstart', () => {
      var event = new KeyboardEvent('keydown', {'key': 'Escape'})
      document.dispatchEvent(event)
    })
  }

  render() {
    const { folder } = this.props;
    const { slideNumber, currentSlide } = this.state;
    document.title = `stephanie diaz-${folder}`;
    const settings = {
      customPaging: (i) => {
        return (
          <div
          className="custom-thumbnail"
          >
          <img
          className="thumbnail-image"
          src={`/images/${folder}/${i + 1}.jpg`}
          alt=""
          />
          </div>
        );
      },
      closeOnDocumentClick: true,
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      fade: true,
      pauseOnHover: false,
      arrows: true,
      swipeToSlide: true,
      touchMove: true,
      beforeChange: (oldIndex, newIndex) => {
        this.setState({ slideNumber: newIndex })
      }
    };

    return (
      <div id="carousel">
        <Slider {...settings} className="carousel-item">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(picNumber => {
            return (
              <div key={picNumber} className="pic-container" >
                <Modal
                dimmer="blurring"
                onOpen={this.onOpen}
                trigger={
                <img
                onClick={() => this.setState({ currentSlide: slideNumber })}
                className="images"
                src={`/images/${folder}/${picNumber}.jpg`}
                alt="" />}
                >
                <Modal.Content className="modal-image-container" style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                  <Image
                  style={{maxWidth: '100%', maxHeight: '100%', margin: 'auto'}}
                  src={`/images/${folder}/${currentSlide + 1}.jpg`}
                  className="oneimage"
                  />
                </Modal.Content>
                </Modal>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default withRouter(Carousel);

Carousel.propTypes = {
  folder: PropTypes.string.isRequired
}

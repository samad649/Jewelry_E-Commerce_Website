




import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageCarousel(){
return(
<>
<div className='carousel'>
<Carousel 
  infiniteLoop={true}
  autoPlay={true}
  interval={1000}
  showThumbs={false} 
  showStatus={false} 
  showArrows={true} 
  showIndicators={true} 
  className='reactCarousel'
  renderIndicator={(onClickHandler, isSelected, index, label) => {
    // Custom rendering of indicators
    const indicatorClasses = isSelected ? "indicator-selected" : "indicator";
    return (
      <div
        key={index}
        className={indicatorClasses}
        onClick={onClickHandler}
        title={label}
      />
    );
  }}
  >
      <div className='imageContainer'>
        <img src={require('/')} alt='img1'/>
      </div>

      <div  className='imageContainer'>
        <img src={require('/')} alt='img2'/>
      </div>

      <div  className='imageContainer'>
        <img src={require('/')} alt='img3'/>
      </div>
    </Carousel>
</div>
</>);
}


export default ImageCarousel;
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default function Cards() {
  const images = import.meta.globEager('../logos/*.{png,jpg,jpeg,svg}');
  return (
    <>
    <h2 className="font-extrabold text-6xl py-4 text-fifth">
            Tech Stack I Worked On
          </h2>
<Carousel className='slider-track w-4/5 h-[400px] grid place-content-center text-center'
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  dotListClass="custom-dot-list-style"
  containerClass="carousel-container"
>
{Object.keys(images).map((imageName) => (
          <img key={imageName} src={images[imageName].default} className="w-3/4 object-scale-down bg-center h-[200px] rounded-lg max-h-[200px]"/>
        ))}
</Carousel>
</>
  );
}
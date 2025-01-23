import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/carousal.css'

const Carousal = () => {
    const carouselData = [
        {
            id: 1,
            src: "https://res.cloudinary.com/djaj22l6x/image/upload/v1737573929/download_gngqlk.jpg",  
            alt: "The Back Waters",
            title: 'Swim Into The Streams.',
            caption:"Discover the tranquility and adventure of riverside escapes! From serene boat rides to thrilling white-water rafting, rivers offer the perfect blend of peace and excitement for every traveler.",
            interval: 2000,

        },
        {
            id: 2,
            src:"https://res.cloudinary.com/djaj22l6x/image/upload/v1737574078/travel_a7kdvj.jpg",
            alt: "Embrace the Joy of Free Moments",
            title: "Embrace the Joy of Free Moments",
            caption:"Life’s best moments are the ones spent carefree—soak in the little joys, breathe deeply, and savor every second of freedom.",
            interval: 2000,
        },
        {
            id: 3,
            src:"https://res.cloudinary.com/djaj22l6x/image/upload/c_thumb,w_200,g_face/v1737574166/images_fox7dg.jpg",
            alt: "Conquer the Heights, Embrace the Freedom",
            title:"Conquer the Heights, Embrace the Freedom",
            caption:"Mountain climbing isn’t just a journey up; it’s a journey within. Feel the thrill, conquer your fears, and let the peaks set your soul free.",
            interval: 2000
        },
    ];

  
    return (
        <div>
            <Carousel controls={false}>
                {carouselData.map((item) => (
                    <Carousel.Item key={item.id} interval={item.interval}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={item.alt}
                           
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Carousal;

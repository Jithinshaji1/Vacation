import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import Carousal from './components/Carousel';
import Navbar from './components/Navbar';
const recommendations = {
  "Mountains": {
    "Adventure": {
      "Low": [
        "Based on your preferences, we recommend exploring the Smoky Mountains! Experience the joy of camping under the stars and hiking scenic trails that offer spectacular views. With a low budget, you can immerse yourself in nature while enjoying a peaceful and adventurous getaway."
      ],
      "Medium": [
        "Based on your preferences, we recommend a thrilling trip to Aspen, Colorado! Experience skiing on world-class slopes and try white-water rafting on the Colorado River. With a medium budget, you can balance excitement and comfort while exploring the majestic Rocky Mountains."
      ],
      "High": [
"Based on your preferences, we recommend an unforgettable trip to the Swiss Alps! Stay at a luxury mountain resort and enjoy once-in-a-lifetime activities like heli-skiing and glacier hiking. With a high budget, this is a perfect combination of adrenaline and lavish indulgence."
      ]
    },
    "Relaxation": {
      "Low": [
        "Based on your preferences, we recommend a tranquil cabin stay in the Blue Ridge Mountains! Enjoy birdwatching, scenic hikes, and quiet moments surrounded by nature. With a low budget, this trip offers serenity and a deep connection with the great outdoors."
      ],
      "Medium": [
        "Based on your preferences, we recommend a rejuvenating yoga retreat in Rishikesh, India! Unwind with calming yoga sessions and spa experiences in the Himalayan foothills. With a medium budget, this trip is ideal for relaxation and spiritual renewal."
      ],
      "High": [
       "Based on your preferences, we recommend a luxury getaway to Banff, Canada! Stay in a lavish lodge surrounded by breathtaking mountain views and enjoy world-class relaxation. With a high budget, this trip offers unparalleled peace and comfort."
      ]
    }
  },
  "Beach": {
    "Adventure": {
      "Low": [
        "Based on your preferences, we recommend visiting Bali, Indonesia! Learn to surf on its iconic beaches or enjoy snorkeling in crystal-clear waters. With a low budget, you can experience exciting water sports while soaking up the vibrant island culture."
      ],
      "Medium": [
       "Based on your preferences, we recommend an adventurous trip to the Great Barrier Reef in Australia! Go scuba diving in one of the world’s most stunning marine ecosystems or try kite surfing in Maui, Hawaii. With a medium budget, you can enjoy thrilling water activities in tropical paradises."
      ],
      "High": [
        " Based on your preferences, we recommend an exclusive escape to Bora Bora, French Polynesia! Stay at a luxury beach resort and enjoy private yachting or deep-sea fishing. With a high budget, this trip offers a perfect mix of excitement and opulence."
      ]
    },
    "Relaxation": {
      "Low": [
        "Based on your preferences, we recommend a laid-back beach day in Santa Monica, USA! Collect seashells along the shore or simply relax with a good book while enjoying the ocean breeze. With a low budget, this trip offers simple yet delightful beachside tranquility."
      ],
      "Medium": [
       "Based on your preferences, we recommend a serene vacation in Phuket, Thailand! Enjoy a beachside massage or take a romantic sunset cruise in the Bahamas. With a medium budget, you can rejuvenate while surrounded by tropical beauty."
      ],
      "High": [
        "Based on your preferences, we recommend an indulgent escape to the Amalfi Coast in Italy! Stay in a private villa overlooking the Mediterranean or relax in an overwater bungalow in Bora Bora. With a high budget, this luxurious trip is the epitome of beachfront relaxation."
      ]
    }
  }
};

function Home(){
  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [budget, setBudget] = useState('');
  const [recommendation, setRecommendation] = useState([]);

  const getRecommendation = () => {
    if (!location || !activity || !budget) {
      setRecommendation(["Please select all options."]);
      return;
    }
    const userRecommendation = recommendations[location]?.[activity]?.[budget];
    setRecommendation(userRecommendation || ["Invalid selection."]);
  };

  return (
    <>
    <Navbar className='navbar'/>
    <Carousal/>
    <Header title="PLAN YOUR DREAM WITH US!!"></Header>
    <div className="container-1">
     
      <Form
        location={location}
        setLocation={setLocation}
        activity={activity}
        setActivity={setActivity}
        budget={budget}
        setBudget={setBudget}
        getRecommendation={getRecommendation}
      />
      <Recommendations recommendation={recommendation} />
    
    </div>
      <Footer className='footer' text="© 2025 Vacation Planner. All rights reserved." />
      </>
  );
}

export default Home;

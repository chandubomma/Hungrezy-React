import RestaurantTopBar from "../components/Restaurant/RestaurantTopBar";
import RestaurantGrid from "../components/Restaurant/RestaurantGrid";
import { useEffect } from "react";




const Restaurants = () => {
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/files/top_cities.json');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       if (!data) {
  //         throw new Error('Unexpected empty response');
  //       }
  //       console.log('yes')
  //      // console.log(data.Hyderabad.Kompally.restaurants)
  //     } catch (error) {
  //       console.error('Error fetching the file:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
 
  const restaurants = [
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
    {
      name: 'Sample Restaurant',
      cuisine: 'Italian',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd',
      price: 20,
      // Add more properties as needed
    },
  ];
  return (
    <div>
      <RestaurantTopBar/>
      <RestaurantGrid restaurants={restaurants}/>
    </div>
  )
};

export default Restaurants;

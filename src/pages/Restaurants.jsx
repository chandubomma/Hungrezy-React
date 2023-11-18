import RestaurantTopBar from "../components/Restaurant/RestaurantTopBar";
import RestaurantGrid from "../components/Restaurant/RestaurantGrid";
import { useEffect,useState } from "react";





const Restaurants = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const key1 = 'Hyderabad'; // Replace with your key1
        const key2 = 'Begumpet'; // Replace with your key2

        const response = await fetch(`http://localhost:3000/Restaurants/getData?key1=${key1}&key2=${key2}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        const restaurantsArray = Object.values(result.value.restaurants);
        console.log(restaurantsArray);
        setData(restaurantsArray);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
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
      {
        data!=null &&
        <RestaurantGrid restaurants={data}/> 
      }
       
      {/* <DataFetcherComponent/> */}
    </div>
  )
};

export default Restaurants;

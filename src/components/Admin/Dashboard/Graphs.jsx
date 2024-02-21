import { useEffect, useState } from "react";
import SparkChartComponent from "./SparkChartComponent";
import PieChartComponent from "./PieChartComponent";

const customersData = [
  {
    month: "January",
    customers: 100,
  },
  {
    month: "February",
    customers: 110,
  },
  {
    month: "March",
    customers: 150,
  },
  {
    month: "April",
    customers: 300,
  },
  {
    month: "May",
    customers: 250,
  },
  {
    month: "June",
    customers: 200,
  },
  {
    month: "July",
    customers: 90,
  },
  {
    month: "August",
    customers: 200,
  },
  {
    month: "September",
    customers: 400,
  },
  {
    month: "October",
    customers: 200,
  },
  {
    month: "November",
    customers: 300,
  },
  {
    month: "December",
    customers: 200,
  },
];

const restaurantsData = [
  {
    month: "January",
    restaurants: 100,
  },
  {
    month: "February",
    restaurants: 85,
  },
  {
    month: "March",
    restaurants: 150,
  },
  {
    month: "April",
    restaurants: 300,
  },
  {
    month: "May",
    restaurants: 250,
  },
  {
    month: "June",
    restaurants: 200,
  },
  {
    month: "July",
    restaurants: 90,
  },
  {
    month: "August",
    restaurants: 200,
  },
  {
    month: "September",
    restaurants: 400,
  },
  {
    month: "October",
    restaurants: 200,
  },
  {
    month: "November",
    restaurants: 300,
  },
  {
    month: "December",
    restaurants: 200,
  },
];

const datahero = [
  {
    name: "approved",
    value: 9800,
  },
  {
    name: "suspended",
    value: 4567,
  },
  {
    name: "inprogress",
    value: 3908,
  },
  {
    name: "rejected",
    value: 2400,
  },
];

const Graphs = ({ restaurants, loading }) => {
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [customerPercentageChange, setCustomerPercentageChange] = useState(0);
  const [totalRestaurants, setTotalRestaurants] = useState(0);
  const [restauantsPercentageChange, setRestaurantsPercentageChange] =
    useState(0);

  useEffect(() => {
    let total = 0;
    customersData.forEach((data) => {
      total += data.customers;
    });
    setTotalCustomers(total);
    const customerIndex = customersData.findIndex(
      (data) =>
        data.month === new Date().toLocaleString("default", { month: "long" })
    );
    if (customerIndex !== -1 && customerIndex > 0) {
      const previousMonthCustomers = customersData[customerIndex - 1].customers;
      const currentMonthCustomers = customersData[customerIndex].customers;
      const change = currentMonthCustomers - previousMonthCustomers;
      let percentage;
      if (currentMonthCustomers > previousMonthCustomers) {
        percentage = (change / currentMonthCustomers) * 100;
      } else {
        percentage = (change / previousMonthCustomers) * 100;
      }
      setCustomerPercentageChange(percentage.toFixed(2));
    }

    let totalRestaurants = 0;
    restaurantsData.forEach((data) => {
      totalRestaurants += data.restaurants;
    });

    setTotalRestaurants(totalRestaurants);

    const restaurantIndex = restaurantsData.findIndex(
      (data) =>
        data.month === new Date().toLocaleString("default", { month: "long" })
    );
    if (restaurantIndex !== -1 && restaurantIndex > 0) {
      const previousMonthRestaurants =
        restaurantsData[restaurantIndex - 1].restaurants;
      const currentMonthRestaurants =
        restaurantsData[restaurantIndex].restaurants;
      const change = currentMonthRestaurants - previousMonthRestaurants;
      let percentage;
      if (currentMonthRestaurants > previousMonthRestaurants) {
        percentage = (change / currentMonthRestaurants) * 100;
      } else {
        percentage = (change / previousMonthRestaurants) * 100;
      }
      setRestaurantsPercentageChange(percentage.toFixed(2));
    }
  }, []);

  return (
    <div>
      <div className="flex my-10">
        <SparkChartComponent
          data={customersData}
          percentageChange={customerPercentageChange}
          total={totalCustomers}
          label={"customers"}
        />

        <SparkChartComponent
          data={restaurantsData}
          percentageChange={restauantsPercentageChange}
          total={totalRestaurants}
          label={"restaurants"}
        />
      </div>

      <div className="flex my-10">
        <PieChartComponent data={datahero} label={"Customers"} />
        <PieChartComponent
          data={restaurants}
          label={"Restaurants"}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Graphs;

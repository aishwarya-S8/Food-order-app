import React, { useEffect, useState } from "react";
import "./Body.css";
import { useNavigate } from "react-router-dom";
import CarouselImage from "./CarouselImage";

const Body = () => {
  const navigate = useNavigate();
  const handleChanges = () => {
    navigate("/menu");
  };

  const [restaurants, setRestaurants] = useState([
    {
      name: "The Bombay Canteen",
      address: " Udupi",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/1559-AD-Restaurant-Udaipur-Rajasthan.jpg?w=1200&ssl=1",
    },
    {
      name: "1135 AD",
      address: " Manipal",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/1135-AD-Restaurant-Jaipur-Rajasthan.jpg?w=1200&ssl=1",
    },
    {
      name: "Ballygunge Place",
      address: "Kundapura",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/The-Bombay-Canteen-Mumbai.jpg?w=1200&ssl=1",
    },
    {
      name: "Bomra’s",
      address: "Kota",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/1559-AD-Restaurant-Udaipur-Rajasthan2.jpg?w=1200&ssl=1",
    },
    {
      name: " The Bangala",
      address: " Udupi",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Izumi-Restaurant-Mumbai.jpg?w=1024&ssl=1",
    },
    {
      name: " Agashiye, Ahmedabad",
      address: "Koteshwara",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Ballygunge-Place-Restaurant-Kolkata-West-Bengal.jpg?w=900&ssl=1",
    },
    {
      name: "O Pedro",
      address: "Manipal",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Bomras-Restaurant-Goa.jpg?w=1200&ssl=1",
    },
    {
      name: " Ambrai",
      address: "Kundapura",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Aish-Restaurant-Hyderabad.jpg?w=1200&ssl=1",
    },
    {
      name: "The Black Sheep Bistro",
      address: "Kota",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/The-Bangala-Restaurant-Pudukkottai.jpg?w=815&ssl=1",
    },
    {
      name: " Amethyst",
      address: "Udupi",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Agashiye-Restaurant-Ahmedabad-Gujarat.jpg?w=1024&ssl=1",
    },
    {
      name: "Bademiya",
      address: "Manipal",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/O-Pedro-Restaurant-Mumbai.jpg?w=1200&ssl=1",
    },
    {
      name: "Bawarchi",
      address: "Kota",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Ambrai-Restaurant-Udaipur.jpg?w=900&ssl=1",
    },
    {
      name: "Bharawan Da Dhaba",
      address: "Koteshwara",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/The-Black-Sheep-Bistro-Goa.jpg?w=1200&ssl=1",
    },
    {
      name: "Bukhara",
      address: "Udupi",
      Image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Bademiya-Restaurant-Mumbai.jpg?w=1200&ssl=1",
    },
  ]);

  return (
    <div className="body">
      <CarouselImage />
      <div className="bodyItems" onClick={handleChanges}>
        {restaurants.map((item, index) => (
          <div className="restaurantDeatil">
            <h5>{item.name}</h5>
            <img src={item.Image} width={300} height={300}></img>
            <div style={{ marginTop: 20 }}>
              <h6>{item.address}</h6>
            </div>
            <li className="freeDel">Free delivery and 10% offer</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

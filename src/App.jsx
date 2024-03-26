import axios from "axios";
import { useState } from "react";
import Weather from "./Components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "bec2d7db7e735dbfa43cfac938a2991b";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      setLocation("");
    }
  };

  return (
    <main className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[400px] md:w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white shadow-md"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </main>
  );
}

export default App;

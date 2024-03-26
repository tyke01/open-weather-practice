


const Weather = ({ weatherData }) => {
  return (
    <section>
      {weatherData.weather ? (
        <div className="md:w-[500px] md:h-[250px] w-[450px] h-[400px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">{weatherData.name}, {weatherData.sys.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Weather;

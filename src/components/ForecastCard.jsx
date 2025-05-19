export default function ForecastCard({ forecast }) {
  
  const date = new Date(forecast.dt_txt).toLocaleDateString(undefined, {
    weekday: "short",
  });

  const temp = Math.round(forecast.main.temp);
  const condition = forecast.weather[0].main;

  return (
    <div>
      <p>{date}</p>
      <p>{temp}°C</p>
      <p>{condition}</p>
    </div>
  );
}

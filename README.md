# Weather Dashboard

A responsive and modern weather application built with React and Tailwind CSS. It fetches weather data using the OpenWeatherMap API and provides real-time weather updates, a 5-day forecast, and location-based functionality.

## Live Demo

You can view the deployed application here:  
[https://weatherdashboarddemo.netlify.app](https://682b631c80aceb9264c5c900--weatherdashboarddemo.netlify.app/)

## Features

- Location-based current weather using the browser's geolocation API
- Search functionality to view weather for any city
- Toggle between Celsius and Fahrenheit units
- Extended 5-day weather forecast based on 12:00 PM data
- Error handling for failed API requests
- Responsive UI designed with Tailwind CSS
- Modular and clean React component structure

## Technologies Used

- React
- Tailwind CSS
- OpenWeatherMap API
- Vite

## Project Structure

- `components/`: Contains reusable UI components like `SearchBar`, `CurrentWeather`, `ForecastList`, and `ForecastCard`
- `context/`: Global state management using React Context (`WeatherContext.jsx`)
- `services/`: API interaction logic (`weatherApi.js`)
- `utils/`: Helper functions (e.g., city name lookup)

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/IbrahimAlShakak/Weather-Dashboard.git
cd Weather-Dashboard

2. Install dependencies:
npm install

3. Create a .env file and add your OpenWeatherMap API key:
VITE_OPENWEATHER_API_KEY=your_api_key_here

4.Start the development server:
npm run dev

## Deployment

The app is deployed using Netlify. You can deploy it by linking your GitHub repository and configuring environment variables through Netlify’s dashboard.

License
This project is open source and available under the MIT License.

```

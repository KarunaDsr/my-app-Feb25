import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weather: any;
constructor(private weatherService:WeatherService){
  weatherService.getWeather().subscribe(
    (data:any)=>{
      this.weather = {
        temperature: data.current_weather.temperature,
        windSpeed: data.current_weather.windspeed,
        windDirection: data.current_weather.winddirection,
        isDay: data.current_weather.is_day,
        time: data.current_weather.time
    };
});
}

getWindDirectionName(degree: number): string {
if (degree > 337.5 || degree <= 22.5) return 'N';
if (degree > 22.5 && degree <= 67.5) return 'NE';
if (degree > 67.5 && degree <= 112.5) return 'E';
if (degree > 112.5 && degree <= 157.5) return 'SE';
if (degree > 157.5 && degree <= 202.5) return 'S';
if (degree > 202.5 && degree <= 247.5) return 'SW';
if (degree > 247.5 && degree <= 292.5) return 'W';
if (degree > 292.5 && degree <= 337.5) return 'NW';
return '';
}
}
    

  

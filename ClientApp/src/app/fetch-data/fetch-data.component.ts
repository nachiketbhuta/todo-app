import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  // public forecasts: WeatherForecast[];

  // constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //   http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //     this.forecasts = result;
  //   }, error => console.error(error));
  // }

  public todos: Todo[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // console.log('BASE URL: ', baseUrl)
    http.get<Todo[]>(baseUrl + 'todo').subscribe(result => {
      this.todos = result;
      console.log('Response: ', result);
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  id: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface Todo {
  id: number;
  name: string;
}

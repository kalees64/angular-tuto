import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment.development';
import axios from 'axios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  apiUrl: string = environment.API_URI;

  weatherData!: any;

  city!: string;

  async getWeather(): Promise<void> {
    const res = await axios.get(
      `${this.apiUrl}?q=${this.city}&appid=${environment.API_KEY}`
    );

    console.log(res.data);

    this.weatherData = res.data;

    this.city = '';
  }
}

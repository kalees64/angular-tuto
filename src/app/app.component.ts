import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface I_QUOTE {
  id: number;
  quote: string;
  author: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-tuto';

  quotes!: I_QUOTE[];

  constructor(private httpClient: HttpClient) {}

  async getQuotes() {
    const url = 'https://dummyjson.com/quotes';
    const res: any = await firstValueFrom(this.httpClient.get(url));
    console.log(res);
    this.quotes = res.quotes;
  }

  ngOnInit(): void {
    this.getQuotes();
  }
}

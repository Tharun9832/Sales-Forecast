import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private http: HttpClient) {}

  upload(number: string, period: string, file: File): void {
    const data = {
      number: number,
      period: period,
      file: file
    }
    console.log(data);
    this.http.post('https://127.0.0.1:5000/data-input', data);
  }
}

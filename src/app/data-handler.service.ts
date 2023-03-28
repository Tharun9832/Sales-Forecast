import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private http: HttpClient) {}

  upload(number: string, period: string, file: File): void {
    let formData = new FormData();
    formData.set("number", number);
    formData.set("period", period);
    formData.set("file", file)
    this.http.post('http://127.0.0.1:5000/data-input', formData)
      .subscribe(resp => console.log(resp));
  }
}

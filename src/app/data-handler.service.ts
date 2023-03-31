import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private http: HttpClient) {}

  data!: File;

  setData(data: File) {
    this.data = data;
  }

  getData(): Observable<File> {
    return of(this.data);
  }
}

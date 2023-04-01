import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {}

  data!: string;

  setData(data: string) {
    this.data = data;
  }

  getData(): Observable<string> {
    return of(this.data);
  }
}

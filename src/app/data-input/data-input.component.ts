import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {
  dataForm!: FormGroup;
  time!: string;
  dwmy!: string;
  file!: File;
  fileName: string = "Upload dataset"
  items: string[] = ['day(s)', 'week(s)', 'month(s)', 'years(s)'];

  constructor(private dataHandler: DataHandlerService, private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      time: new FormControl('1'),
      dwmy: new FormControl(this.items[0]),
    })
  }

  onChange(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  upload(number: string, period: string, file: File) {
    let formData = new FormData();
    formData.set("number", number);
    formData.set("period", period);
    formData.set("file", file)
    this.httpClient.post('http://127.0.0.1:5000/data-input', formData, { responseType:'blob' })
      .subscribe((resp: Blob)=> {
        var file = new File([resp], "futureData.csv");
        this.dataHandler.setData(file);
        this.router.navigate(['visual'])
      });
  }

  handleUpload() {
    if (this.file) {
      this.time = this.dataForm.value.time;
      this.dwmy = this.dataForm.value.dwmy;
      this.upload(this.time, this.dwmy, this.file)
    }else {
      alert("Please select a dataset")
    }
  }
}

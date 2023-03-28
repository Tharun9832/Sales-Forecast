import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  items: string[] = ['day(s)', 'week(s)', 'month(s)', 'years(s)'];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      time: new FormControl('1'),
      dwmy: new FormControl(this.items[0]),
    })
  }

  onChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  handleUpload() {
    this.time = this.dataForm.value.time;
    this.dwmy = this.dataForm.value.dwmy;
    this.dataHandler.upload(this.time, this.dwmy, this.file);
  }
}

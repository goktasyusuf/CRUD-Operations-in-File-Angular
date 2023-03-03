import { Component, OnInit } from '@angular/core';
import { FileOperationService } from 'src/app/services/file-operation.service';

@Component({
  selector: 'app-file-operation',
  templateUrl: './file-operation.component.html',
  styleUrls: ['./file-operation.component.css']
})
export class FileOperationComponent implements OnInit {
  data:string="";
  constructor(private fileOperationService:FileOperationService){}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.fileOperationService.getAll().subscribe(response=>{
      this.data = response.data;
    })
  }

}

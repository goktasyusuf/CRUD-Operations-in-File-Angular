import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FileOperationModel } from 'src/app/models/fileOperationModel';
import { FileOperationService } from 'src/app/services/file-operation.service';

@Component({
  selector: 'app-file-operation-update',
  templateUrl: './file-operation-update.component.html',
  styleUrls: ['./file-operation-update.component.css']
})
export class FileOperationUpdateComponent implements OnInit {

  oldBrandName: string;
  oldIpAddress: string;
  fileAddForm: FormGroup;
  fileOperation: FileOperationModel;
  constructor(private formBuilder: FormBuilder, private fileOperationService: FileOperationService, private toastrService: ToastrService) { }
  ngOnInit(): void {
    this.createAddForm();
    this.getOldBrandName();
    this.getOldIpAddress();

  }

  createAddForm() {
    this.fileAddForm = this.formBuilder.group(
      {
        brandName: ['', Validators.required],
        ipAddress: ['', Validators.required],
      }
    )
  }

  update() {
    if (this.fileAddForm.valid) {
      var fileModel = Object.assign({}, this.fileAddForm.value);
      this.fileOperationService.update(fileModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success("Başarıyla Güncellendi");
        }
      }, error => {
        this.toastrService.error("Hata");
      })
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    }
    else {
      this.toastrService.info("Formu boş bırakmayınız", "Hata");
    }

  }

  getOldBrandName() {
    this.fileOperationService.getOldBrandName().subscribe(response => {
      if (response.success) {
        this.oldBrandName = response.data;
      }
      else {
        console.log(response.message);
      }

    }, error => {
      console.log(error.message)
    })
  }

  getOldIpAddress() {
    this.fileOperationService.getOldIpAddress().subscribe(response => {
      if (response.success) {
        this.oldIpAddress = response.data;
      }
      else {
        console.log(response.message);
      }

    }, error => console.log(error.message))
  }

  valuechange(value: any) {
    console.log(this.oldBrandName)
  }

  valuechange2(value: any) {
    console.log(this.oldIpAddress)
  }

}

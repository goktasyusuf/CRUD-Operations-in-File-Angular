import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileOperationUpdateComponent } from './components/file-operation-update/file-operation-update.component';
import { FileOperationComponent } from './components/file-operation/file-operation.component';

const routes: Routes = [
  {path:"" , component:FileOperationComponent },
  {path:"update" , component:FileOperationUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

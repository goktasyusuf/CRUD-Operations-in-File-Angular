import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FileOperationService {
  apiURL: string = "https://localhost:44322/api/FileOperation/"



  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel> {
    return this.httpClient.get<ListResponseModel>(this.apiURL + "getall");
  }

  update(body: any):Observable<ListResponseModel> {
    console.log(body)
    return this.httpClient.post<ListResponseModel>(this.apiURL + "update", body);
  }

  getOldBrandName():Observable<ListResponseModel>{
    return this.httpClient.get<ListResponseModel>(this.apiURL + "getoldbrand");
  }

  getOldIpAddress():Observable<ListResponseModel> {
    return this.httpClient.get<ListResponseModel>(this.apiURL + "getoldipaddress");
  }

}

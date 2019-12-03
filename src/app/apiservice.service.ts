import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  url="http://localhost:8083/finra-test/1234567";
  constructor(private httpClient:HttpClient) { }


  getService(){
    return this.httpClient.get(this.url);
  }
}

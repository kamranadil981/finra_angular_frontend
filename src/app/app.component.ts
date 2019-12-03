import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public games:any;
  public inputval:any;
  public tempArr = ["1","2","3"];
  p :number =1;
  url="http://localhost:8084/finratest/";
  result:any;

  constructor(public api:HttpClient){
  
  
  }

  senddata(val){
    console.log(val);
    this.url=this.url+val;
    console.log(this.url);

    this.api.get(this.url).subscribe( data =>{
      this.result=data;
 
    
    })
    this.url="http://localhost:8084/finratest/";
 
           
  }

  ngOnInit(){
    this.games = [
      {'id':1,
      'name':'pk',
      'genre':'hhh'
     },
      {

        'id':2,
      'name':'pkk',
      'genre':'hhh'
      },

      {

        'id':3,
      'name':'pkkkk',
      'genre':'hhh'
      }

    ]

  }
  title = 'test1';

  onSubmit(phonenumber: string) {

  }
}

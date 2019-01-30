import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { LoadService } from '../../utils/service/load.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  message:any={message:{
  	start:'开始',
  	success:'成功',
  	error:'失败'
  }}

  constructor(private loadService:LoadService,private http:HttpClient) { }

  ngOnInit() {
  }

  httpQuest(){
  	this.loadService.loadStart('正在操作中 . . . .');
  }

  httpPo1(){
  	let aat=new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'loading':['正在获取服务器列表','获取失败','获取成功']
    })

  	this.http.post('https://localhost:8090/api/vm/list','tttttt',{headers:aat}).subscribe(data=>{
  		console.log(data);
  	})
  }

  httpPo2(){
  	this.http.get('/api/format',{headers:new HttpHeaders({'loading':'true'})}).subscribe(data=>{
  		console.log(data);
  	})
  }

  httpPo3(){
    let aat=new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'loading':['正在获取服务器列表','获取失败','获取成功']
    })
   this.http.post('https://localhost:8090/api/vm/list','tttttt',{headers:aat}).subscribe(data=>{
      console.log(data);
    })

   let sss=new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'loading':['=========']
    })

   this.http.post('https://localhost:8090/api/vm/list','tttttt',{headers:sss}).subscribe(data=>{
      console.log(data);
    })


  }

}

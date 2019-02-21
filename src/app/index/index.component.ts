import { Component, OnInit } from '@angular/core';

declare var $:any;
 
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  demoItems=[
    {url:'/demo/rolling-monitor',title:'滚动监听'},
    {url:'/demo/table-desc',title:'表格分页'},
    {url:'/demo/tooltip',title:'button disalbed时tooltip'},
    {url:'/demo/boot-slider',title:'滑动条'},
    {url:'/demo/boot-slider',title:'修改不同路由下页面的title的值'},
    {url:'/demo/modal',title:'modal 弹框'},
    {url:'/demo/loader',title:'loading http拦截UI展示'},
    {url:'/demo/loader',title:'优雅的http拦截器'},
    {url:'/demo/loader',title:'http请求结果动画'},
    {url:'/demo/echart',title:'echart图表的使用'},
    {url:'/all-page/console-menu',title:'固定侧边折叠导航栏'},
    {url:'/all-page/error404',title:'没有路由，404错误'}
  ]

  constructor() { }

  ngOnInit() {

  }

}

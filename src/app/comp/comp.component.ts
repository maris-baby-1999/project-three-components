import { Component, OnInit } from '@angular/core';
import { my_service } from '../service/info-service';

@Component({
  
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  title="gadgeon"
  btnclick(){
    const service=new my_service()
    service.onclickbtn(this.title)
  }

}

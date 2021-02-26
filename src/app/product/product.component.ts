import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}



IG.trigger({   triggerNames: ['SqlTrigger1'],   urlParams: {} }) .done(  function (result) {   alert('تم الحفظ ') })
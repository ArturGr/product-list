import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  path = "";
  btn_text = "Neues Produkt";
  today: number = Date.now();

  ngOnInit() {
    this.path="";
    if (this.path == "detail") {
      this.btn_text = "zurück zur Liste";
    }
  }


}

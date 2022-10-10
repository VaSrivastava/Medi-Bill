import { Component } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: string = "";

  constructor() {
    this.userName = "Hi Anonymous User!"
  }
}

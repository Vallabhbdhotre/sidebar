import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sidenavToggled = new EventEmitter<boolean>();
  sideNavStatus:boolean =true;
  
  sideNavToggle(){
  this.sideNavStatus = !this.sideNavStatus;
  this.sidenavToggled.emit(this.sideNavStatus);

  }
  // constructor(){
  //   this.sideNavStatus = !this.sideNavStatus;
  //   this.sidenavToggled.emit(this.sideNavStatus);
  // }

}

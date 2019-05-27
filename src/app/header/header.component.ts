import {Component, ElementRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  cssStringVar = 'header1';


  public headerScrolled = false;


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // const componentPosition = this.el.nativeElement.offsetTop;
    // console.log(componentPosition);
    const num = window.pageYOffset;
    console.log(num);
    if (num > 50) {
      this.headerScrolled = true;
      this.cssStringVar = 'header2';
    } else if (this.headerScrolled && num < 600) {
      this.headerScrolled = false;
      this.cssStringVar = 'header1';
    }
    console.log(this.headerScrolled + 'zzzz' + num);
  }
}

// headerScrolled = false;
//
// @HostListener('window:scroll', [])
// onActivate(e) {
//   const a = window.document.pageYOffset;
//   if (a > 111) {
//     this.headerScrolled = !this.headerScrolled;
//     console.log(this.headerScrolled);
//   }
// }
// }

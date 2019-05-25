import {Component, ElementRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public headerScrolled;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
  @Inject(WINDOW) private window, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    console.log(componentPosition);
    const num = this.doc.body.scrollTop;
    console.log(this.headerScrolled + '' + num);
    if ( num > 50 ) {
      this.headerScrolled = true;
    } else if (this.headerScrolled && num < 600) {
      this.headerScrolled = false;
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

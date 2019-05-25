import {Component, EventEmitter, HostListener, Inject, Output} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ml';
  // @Output() toogle = new EventEmitter();
  // @HostListener('window:scroll', [])
  // // onWindowScroll() {
  // //   const a = window.pageYOffset;
  // //   if (a = 99) {
  // //     console.log(a);
  // //   }
  // //   console.log('Scrolling!');
  // // }
  // // check scroll position
  // onActivate(e) {
  //   const a = window.pageYOffset;
  //   if (a > 111) {
  //     this.toogle.emit();
  //     console.log(a);
  //   }

  // }

}

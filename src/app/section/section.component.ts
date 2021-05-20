import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
// import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

    isAnimate:boolean = false;
    isAnimateTwo:boolean = false;
    isOpen = false;

  constructor() { }

  ngOnInit(): void {

  }

  openLineshield(){
    window.open('https://lineclearexpress.com/doc/lineshield.pdf', '_blank');
  }

  
}

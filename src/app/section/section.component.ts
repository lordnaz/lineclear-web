import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
// import { trigger, state, style, animate, transition} from '@angular/animations';

// import "jquery";
// declare var $: any;

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

    isAnimate:boolean = false;
    isAnimateTwo:boolean = false;
    // $:any;
    // isAnimate3:boolean = false;
    isOpen = false;

  constructor() { }

  ngOnInit(): void {

  }



  
}

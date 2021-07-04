import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
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

    slides = [
      {img: "./assets/image/slick/slick1.jpeg"},
      {img: "./assets/image/slick/slick2.jpeg"},
      {img: "./assets/image/slick/slick3.png"},
      {img: "./assets/image/slick/slick4.jpeg"}
    ];

    slideConfig = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: true
          }
        }
      ]
    };
    
    // Slick Slider
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }  
    
    

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {

  }

  openLineshield(){
    // window.open('https://lineclearexpress.com/doc/lineshield.pdf', '_blank');
    this.route.navigate(['lineshield']);
  }

  goToFB(){
    window.open('https://www.facebook.com/LineClearExpressMY/?ref=page_internal', '_blank');
  }
  
}

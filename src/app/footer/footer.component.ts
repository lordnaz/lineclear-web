import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private route: Router,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  goToTnc(){
    this.route.navigate(['tnc']);
  }

  goToCarriage(){
    this.route.navigate(['tnc-carriage']);
  }

  goToPolicy(){
    this.route.navigate(['policy']);
  }

  goToLanding(){
    //   alert('hello')
    //   return false
    this.route.navigate(['landing']);
  }

  goToQuote(){
    this.route.navigate(['quotation']);
  }

  goToPitstop(){
    this.route.navigate(['pitstop']);
  }

  goToAbout(){
    this.route.navigate(['about-us']);
  }

  goToTracker(){
    this.route.navigate(['tracker']);
  }

  goToContact(){
    this.route.navigate(['contactus']);
  }

  goToPortal(){
    window.open('https://www.lineclearexpressonline.com/#/auth/login');
  }

  openPromo(){
    window.open('https://lineclearexpress.com/doc/promo.pdf', '_blank');
  }

  openRate(){
    window.open('https://lineclearexpress.com/doc/price_rate.pdf', '_blank');
  }

  openLineshield(){
    window.open('https://lineclearexpress.com/doc/lineshield.pdf', '_blank');
  }

  goTest(){
    //   window.open('https://siasky.net/jACbuDlAEpz8NPP5utuWV56NdaCqPEornTCKQpO9xYcPhw', '_blank')
  }

  public onClick(elementId: string): void { 
    // this.viewportScroller.scrollToAnchor(elementId);
    window.location.href = '/landing#AnchorId';
}
  

}

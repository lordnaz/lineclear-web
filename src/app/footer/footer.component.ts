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

    this.route.navigate(['']);
  }
  
  goToService(){
    window.location.href = '/#AnchorId';
    // this.route.navigateByUrl('/landing#AnchorID');
    // this.router.navigate(['landing'], { fragment: 'AnchorID' });
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

  goToFB(){
    window.open('https://www.facebook.com/LineClearExpressMY/?ref=page_internal', '_blank');
  }

  goToInsta(){
    window.open('https://www.instagram.com/lineclearexpress/', '_blank');
  }

  goToYoutube(){
      window.open('https://www.youtube.com/channel/UCVkMuHnwc-XKdidhuyRo5Qw', '_blank');
  }

  goToTwitter(){
      window.open('https://twitter.com/lineclearexpress', '_blank');
  }

  colorWinTnc(){
    window.open('https://lineclearexpress.com/doc/colorwin_tnc.pdf', '_blank');
  }

  hantarMenangTnc(){
    window.open('https://lineclearexpress.com/doc/HantarDanMenang.pdf', '_blank');
  }

  public onClick(elementId: string): void { 

    this.viewportScroller.scrollToAnchor(elementId);
    
    //   window.location.href = '/v2/landing#AnchorId';
  }
  
  public goToFragment(fragment: string): void{

    // let elementId = 'serviceId'
    
    // this.route.navigate( ['/landing#'], {fragment: fragment});
    // this.route.navigate(['/landing#'], { fragment: 'serviceId' });
    // this.route.navigate(['/landing#'+fragment])
    // this.redirectTo('/landing#serviceId');
    // window.location.href = '/v2/landing#' + fragment;
    // window.location.href = '/landing#' + fragment;
    // window.location.href = 'https://lineclearexpress.com/v2/landing#serviceId'
    // window.location.replace("http://someUrl.com");
    // this.viewportScroller.scrollToAnchor(elementId);

    // production
    // this.route.navigateByUrl("/v2/landing#serviceId")

    // staging 
    this.route.navigateByUrl("/#serviceId")
    
  }


}


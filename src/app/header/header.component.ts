import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currBaseURL: any;

  constructor(
    private route: Router,
    private platformLocation: PlatformLocation
  ) {

    this.currBaseURL = (this.platformLocation as any).location.origin;

   }

  ngOnInit(): void {
  }

  goToLanding(){
    // this.route.navigate(['landing']);
    // this.route.navigateByUrl("/landing")
    // this.route.navigate(['landing'])
    // .then(() => {
    //     window.location.reload();
    // });

    window.location.href = this.currBaseURL + '/'

    // alert(this.currBaseURL)

  }

  goToQuote(){
    this.route.navigate(['quotation']);
  }

  goToPitstop(){
    this.route.navigate(['pitstop']);
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

}

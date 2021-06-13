import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuoteComponent } from './quote/quote.component';
import { LandingComponent } from './landing/landing.component';
import { PitstopComponent } from './pitstop/pitstop.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ContactComponent } from './contact/contact.component';
import { TncComponent } from './tnc/tnc.component';
import { TncCarriageComponent } from './tnc-carriage/tnc-carriage.component';
import { PolicyComponent } from './policy/policy.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [

  // sample later change 
    { 
        path: "landing", 
        component: LandingComponent
    },
    { 
        path: "quotation", 
        component: QuoteComponent
    },
    // { 
    //     path: "v2/landing", 
    //     component: LandingComponent
    // },
    { 
        path: "pitstop", 
        component: PitstopComponent
    },
    { 
        path: "header", 
        component: HeaderComponent
    },
    { 
        path: "section", 
        component: SectionComponent
    },
    { 
        path: "tracker", 
        component: TrackerComponent
    },
    { 
        path: "contactus", 
        component: ContactComponent
    },
    { 
        path: "tnc", 
        component: TncComponent
    },
    { 
        path: "tnc-carriage", 
        component: TncCarriageComponent
    },
    { 
        path: "policy", 
        component: PolicyComponent
    },
    { 
        path: "about-us",
        component: AboutUsComponent
    },
    // { path: "", redirectTo: "/landing", pathMatch: "full" }
    { 
        path: "", 
        component: LandingComponent
    },
  
    // { path: "**", redirectTo: "/landing" }
    // { path: "**", redirectTo: "/landing", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
                                            scrollPositionRestoration: 'enabled', 
                                            anchorScrolling: 'enabled',
                                            onSameUrlNavigation: 'reload'
                                        })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

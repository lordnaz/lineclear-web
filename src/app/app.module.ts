// Core Module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// External Module 
import { NgxSpinnerModule } from "ngx-spinner";
import { FacebookModule } from "ngx-facebook";

// Component 
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { LandingComponent } from './landing/landing.component';
import { PitstopComponent } from './pitstop/pitstop.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ContactComponent } from './contact/contact.component';
import { TncComponent } from './tnc/tnc.component';
import { TncCarriageComponent } from './tnc-carriage/tnc-carriage.component';
import { PolicyComponent } from './policy/policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppearDirectiveDirective } from './appear-directive.directive';

// Animation 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    LandingComponent,
    PitstopComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    TrackerComponent,
    ContactComponent,
    TncComponent,
    TncCarriageComponent,
    PolicyComponent,
    AboutUsComponent
    // AppearDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    FacebookModule.forRoot(),
    BrowserAnimationsModule
    // AppearDirectiveDirective
    // RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

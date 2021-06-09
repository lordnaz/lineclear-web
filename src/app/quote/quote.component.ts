import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';  
// import { NgxSpinnerService } from "ngx-spinner";
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../api.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit, AfterViewInit {

    quote_result:boolean = false;
    title:string = 'Volumetric Calculator';
    visible:boolean = false;
    varWeight:number = 0.0;

    // Forms
    inputSender:any;
    inputRecipient:any;
    inputWeight:any;
    inputType:any;
    inputWidth:any;
    inputLength:any;
    inputHeight:any;

    // form alert class binder 
    isInvalid:boolean = true;
    isInvalid2:boolean = true;
    isInvalid3:boolean = true;
    isInvalid4:boolean = true;

    isValid:boolean = true;
    isValid2:boolean = true;
    isValid3:boolean = true;
    isValid4:boolean = true;

    itemType:any;

    origincity:any;
    destinationcity:any;

    // quotation 
    deliverycharge:number = 0.00;
    price:number = 0.00;
    surcharge:number = 0.00;
    servicetax:number;

    constructor(
        private spinner: NgxSpinnerService,
        private apiService: ApiService,
        private router: Router,
        private titleService: Title,
        private activatedRoute: ActivatedRoute,
        private metaService: Meta
    ) { }

    ngOnInit(): void {

        this.titleService.setTitle("Get Free Quote | Express Delivery Service | Line Clear Express")

        const metaDesc = this.metaService.getTag('name=description'); 

        if(!metaDesc){
            this.metaService.addTags([
                {name: "description", content: "Low Shipping Rate with Line Clear Express Malaysia. Easy & Timely Delivery"}
            ]);
        }else{
            this.metaService.updateTag(  
                {name: "description", content: "Low Shipping Rate with Line Clear Express Malaysia. Easy & Timely Delivery"},  
                "name=description"  
            )  
        }

        this.spinner.show();
    }

    ngAfterViewInit(){
        
    }

    showSpinner() {
        // visible return true 
        this.visible = true;
        

        // calling function after 2 second 
        setTimeout(() => {;
            this.hideSpinner()
        }, 1500);
    }

    hideSpinner(){
        // visible return false 
        this.visible = false;
        
    }


    goToPortal(){
        window.open('https://www.lineclearexpressonline.com/#/auth/login');
      }

    setBool(){
        this.quote_result = !this.quote_result;
        this.inputWeight = null;
    }

    quoteSubmit(quoteForm){

        this.visible = true;

        console.log('form data: ', quoteForm);
        console.log('data: ', quoteForm.value)

        this.inputSender = quoteForm.value.inputSender
        this.inputRecipient = quoteForm.value.inputRecipient
        this.inputWeight = quoteForm.value.inputWeight
        this.inputType = quoteForm.value.inputType

        if(this.inputType == 'D'){
            this.itemType = 'Document'
        }else{
            this.itemType = 'Parcel'
        }

        this.apiService.getQuotation(this.inputSender, this.inputRecipient, this.inputWeight, this.inputType).subscribe((res: any) => {

            if(res.servicetype =="ODA"){
                this.surcharge = 21.20;
            }

            this.price = res.price

            this.origincity = res.origincity
            this.destinationcity = res.destinationcity

            this.deliverycharge = (this.price - this.surcharge);
            this.servicetax = (this.price - this.surcharge - this.deliverycharge);

            this.setBool();

        }, error => {
            Swal.fire("Oops...", "Error : Failed!", "error")
        }) 

        setTimeout(() => {;
            this.visible = false
        }, 1500);

    }

    getVolume(){

        let answers:any = (this.inputWidth * this.inputLength * this.inputHeight )/6000;

        answers = answers.toFixed(1)
        
        this.inputWeight = answers

        // reset value
        this.inputWidth = null;
        this.inputLength = null;
        this.inputHeight = null;

        let elem = document.getElementById('calculate');

        setTimeout(function () {
            let evt = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });

            elem.dispatchEvent(evt);
        }, 350);
    }

}

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
            // console.log('meta tag added')
            this.metaService.addTags([
                {name: "description", content: "Our nationwide branches and points in Malaysia. Pick Up; Delivery; Drop-off; Self Collect;"}
            ]);
        }else{

            // console.log('meta tag updated')
            this.metaService.updateTag(  
                { name: "description", content: "Our nationwide branches and points in Malaysia. Pick Up; Delivery; Drop-off; Self Collect;" },  
                "name=description"  
            )  
        }

        this.spinner.show();
    }

    ngAfterViewInit(){
        // this.spinner.show();
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
        // this.spinner.hide();
    }

    setBool(){
        this.quote_result = !this.quote_result;
        // this.showSpinner()
        this.inputWeight = null;
    }

    quoteSubmit(quoteForm){

        // alert('inputWeight: ' + this.inputWeight);
        // let data = {
        //     'sender' : this.inputSender,
        //     'recipient' : this.inputRecipient,
        //     'weight' : this.inputWeight,
        //     'type' : this.inputType
        // }

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
        // this.showSpinner()

        // return false

        this.apiService.getQuotation(this.inputSender, this.inputRecipient, this.inputWeight, this.inputType).subscribe((res: any) => {
            console.log('response: ', res)

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
        // getQuotation

        setTimeout(() => {;
            this.visible = false
        }, 1500);

    }

    getVolume(){

        // alert('inputWidth: ' + this.inputWidth + " | inputLength: " + this.inputLength + " | inputHeight: " + this.inputHeight);

        let answers:any = (this.inputWidth * this.inputLength * this.inputHeight )/6000;

        answers = answers.toFixed(1)
        
        // alert('weight: ' + answers)
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
        


        // swal alert popup chain 
        // Swal.mixin({
        //     input: 'number',
        //     confirmButtonText: 'Next &rarr;',
        //     showCancelButton: false,
        //     progressSteps: ['1', '2', '3'],
        //     preConfirm: (result) => {
        //         if(result === null || result === '' || result === undefined){
        //             Swal.showValidationMessage(
        //                 `Warning : Field is required`
        //             );
        //         }
        //      },
        //      allowOutsideClick: () => !Swal.isLoading()
        // }).queue([
        // {
        //     title: 'Item Width',
        //     text: 'in centimeter (cm)'
        // },
        // {
        //     title: 'Item Length',
        //     text: 'in centimeter (cm)'
        // },
        // {
        //     title: 'Item Height',
        //     text: 'in centimeter (cm)'
        // }
        // ]).then((result) => {
        // if (result) {

        //     const width = result['value'][0]
        //     const length = result['value'][0]
        //     const height = result['value'][0]

        //     let answers:any = (width * length * height )/6000;
        //     answers = answers.toFixed(1);

        //     this.inputWeight = answers;

        //     Swal.fire({
        //     icon: 'success',
        //     title: 'Successfully Calculated!',
        //     html: `
        //         <span style='font-weight: bold;'>FINAL WEIGHT : ${answers} KG</span>
        //     `,
        //     confirmButtonText: 'OK!',
        //     footer: '<i>Brought to you by Line Clear Express&reg;</i>'
        //     })
        // }
        // })
    }

}

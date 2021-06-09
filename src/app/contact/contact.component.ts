import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2'
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    isOpt:string = 'parcel';
    parcelName: any;
    parcelTracker: any;
    parcelEmail: any;
    parcelPhone: any;
    parcelMessage: any;
    lostName: any;
    lostTracker: any;
    lostEmail: any;
    lostPhone: any;
    lostMessage: any;
    accopenCompName: any;
    accopenName: any;
    accopenEmail: any;
    accopenPhone: any;
    accopenParcel: any;
    accopenAddress: any;
    accopenMessage: any;
    crossborderCompName: any;
    crossborderName: any;
    crossborderEmail: any;
    crossborderAddress: any;
    crossborderMessage: any;
    crossborderParcel:any;
    crossborderPhone: any;
    serviceName: any;
    serviceEmail: any;
    servicePhone: any;
    serviceAddress: any;
    serviceMessage: any;
    careerName: any;
    careerPhone: any;
    careerEmail: any;
    careerMessage: any;

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Contact Us | Express Delivery Service | Line Clear Express")

    const metaDesc = this.metaService.getTag('name=description'); 

    if(!metaDesc){
        this.metaService.addTags([
            {name: "description", content: "Contact Us, we are happy to help to answer your questions"}
        ]);
    }else{
        this.metaService.updateTag(  
            {name: "description", content: "Contact Us, we are happy to help to answer your questions" },  
            "name=description"  
        )  
    }
  }

  selectedOpt(value:string){

    switch (value) {
        case 'parcel':
            this.isOpt = 'parcel'
            break;
        case 'lost':
            this.isOpt = 'lost'
            break;
        case 'accopen':
            this.isOpt = 'accopen'
            break;
        case 'crossborder':
            this.isOpt = 'crossborder'
            break;
        case 'servicepoint':
            this.isOpt = 'servicepoint'
            break;
        case 'career':
            this.isOpt = 'career'
            break;
    
        default:
            break;
    }
  }


  sendMail(){

        switch (this.isOpt) {
            case 'parcel':

                    let data1 = {
                        "mailtype": "I",
                        "name": this.parcelName,
                        "trackingid": this.parcelTracker,
                        "email": this.parcelEmail,
                        "phone": this.parcelPhone,
                        "message": this.parcelMessage,
                    }
                
                    this.apiService.postSendEmail(data1).subscribe((res: any) => {
                        // console.log('response: ', res)
                
                    }, error => {
                        // console.log('response: ', error)
                    }) 

                break;
            case 'lost':
                    let data2 = {
                        "mailtype": "D",
                        "name": this.lostName,
                        "trackingid": this.lostTracker,
                        "email": this.lostEmail,
                        "phone": this.lostPhone,
                        "message": this.lostMessage,
                    }
                
                    this.apiService.postSendEmail(data2).subscribe((res: any) => {
                        // console.log('response: ', res)
                
                    }, error => {
                        // console.log('response: ', error)
                    }) 
                break;
            case 'accopen':
                    let data3 = {
                        "mailtype": "O",
                        "companyname": this.accopenCompName,
                        "name": this.accopenName,
                        "email": this.accopenEmail,
                        "phone": this.accopenPhone,
                        "noofparcel": this.accopenParcel,
                        "address": this.accopenAddress,
                        "message": this.accopenMessage,
                    }
                
                    this.apiService.postSendEmail(data3).subscribe((res: any) => {
                        // console.log('response: ', res)
                
                    }, error => {
                        // console.log('response: ', error)
                    }) 
                break;
            case 'crossborder':
                    let data4 = {
                        "mailtype": "B",
                        "companyname": this.crossborderCompName,
                        "name": this.crossborderName,
                        "email": this.crossborderEmail,
                        "phone": this.crossborderPhone,
                        "noofparcel": this.crossborderParcel,
                        "address": this.crossborderAddress,
                        "message": this.crossborderMessage,
                    }
                
                    this.apiService.postSendEmail(data4).subscribe((res: any) => {
                        // console.log('response: ', res)
                
                    }, error => {
                        // console.log('response: ', error)
                    }) 
                break;
            case 'servicepoint':
                    let data5 = {
                        "mailtype": "P",
                        "name": this.serviceName,
                        "email": this.serviceEmail,
                        "phone": this.servicePhone,
                        "address": this.serviceAddress,
                        "message": this.serviceMessage,
                    }
                
                    this.apiService.postSendEmail(data5).subscribe((res: any) => {
                        // console.log('response: ', res)
                
                    }, error => {
                        // console.log('response: ', error)
                    }) 
                break;
            case 'career':
                    let data6 = {
                        "mailtype": "P",
                        "name": this.careerName,
                        "phone": this.careerPhone,
                        "email": this.careerEmail,
                        "message": this.careerMessage,
                    }
                
                    this.apiService.postSendEmail(data6).subscribe((res: any) => {
                        // console.log('response: ', res)
                
                    }, error => {
                        // console.log('response: ', error)
                    }) 
                break;
        
            default:
                break;
        }

        Swal.fire(
            'Inquiry Sent!',
            'We will contact you later, Thanks!',
            'success'
        )
    
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

}

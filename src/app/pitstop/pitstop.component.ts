import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title, Meta } from '@angular/platform-browser'; 

import Swal from 'sweetalert2'

@Component({
  selector: 'app-pitstop',
  templateUrl: './pitstop.component.html',
  styleUrls: ['./pitstop.component.css']
})
export class PitstopComponent implements OnInit {

    branchLocator:any;
    postcode:any = "";
    visible:boolean = false;
    isAuto:boolean = false;

  constructor(
    private spinner: NgxSpinnerService,
    private route: Router,
    private apiService: ApiService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    this.titleService.setTitle("PitStop Locator | Nearest Drop-Off Point | Line Clear Express")

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

    window.scrollTo(0, 0)
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

  pitstopLocator(){

    this.visible = true;
    this.isAuto = true;

    if(this.postcode != ""){
        this.apiService.getPitstopLocator(this.postcode).subscribe((res: any) => {
            console.log('raw resp:', res)
    
            this.branchLocator = res

            if(res.length > 0){

            }else{
                Swal.fire("We'r Sorry!", "No pitstop locator detected", "error")
            }
    
        }, error => {
            Swal.fire("Backend Error!", "Error : <small style='color: red; font-style: italic;'>" + error.error.message + "</small>", "error")
        }) 
    }else{
        Swal.fire('Missing postcode?', 'Invalid request, postcode is required', 'info')
    }

    // reset postcode state 
    this.postcode = ""

    setTimeout(() => {;
        this.visible = false
    }, 1500);
    
  }

}

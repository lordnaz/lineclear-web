import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';  
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

    trackerList:any;
    trackCode:any = "";
    trackerDisplay:boolean = false;
    visible:boolean = false;
    imageTracker:string = "./assets/image/step-1.png";
    trackerListRecon: any;

  constructor(
    private spinner: NgxSpinnerService,
    private route: Router,
    private apiService: ApiService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private metaService: Meta,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {

    document.getElementById("openModalButton").click();

    this.titleService.setTitle("Scan 2 Deliver Express Malaysia | Line Clear Express")

    const metaDesc = this.metaService.getTag('name=description'); 

    if(!metaDesc){

        this.metaService.addTags([
            {name: "description", content: "Provides nationwide courier and  integrated supply chain management solutions from warehousing, pick and pack, last mile delivery and track and trace. Customers are empowered through the Line Clear's smart Scan2Deliver technology to make end-to-end delivery using the web or app."}
        ]);
    }else{

        this.metaService.updateTag(  
            {name: "description", content: "Provides nationwide courier and  integrated supply chain management solutions from warehousing, pick and pack, last mile delivery and track and trace. Customers are empowered through the Line Clear's smart Scan2Deliver technology to make end-to-end delivery using the web or app."},  
            "name=description"  
          )  
    }

    this.spinner.show();
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

getTrackerData(elementId: string): void{

    this.visible = true;

    const trackerStr = this.trackCode

    var str_array = trackerStr.split(',');

    const dataArr = []

    for(var i = 0; i < str_array.length; i++) {
        // Trim the excess whitespace.
        str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        // Add additional code here, such as:
        // console.log('tracker string: ' + str_array[i])

        dataArr.push(str_array[i])
    }

    let data = { 
        "SearchType" : "WayBillNumber",
        "WayBillNumber" : dataArr 
    }

    this.apiService.postTracker(data).subscribe((res: any) => {
        // console.log('raw resp:', res)

        this.trackerDisplay = true

        this.trackerList = res

        let trackerData = []

        this.trackerList.forEach(trackerID => {

            // check 1st object since it is the latest status 
            let trackingstatus = trackerID[0]

            console.log('tracking status: ', trackingstatus)

            switch (trackingstatus.Status) {
                case "Delivered":
                    this.imageTracker="./assets/image/step-5.png"
                    break;
                case "Out for Delivery":
                    this.imageTracker="./assets/image/step-4.png"
                    break;
                case "Order Placed":
                    this.imageTracker="./assets/image/step-1.png"
                    break;
                default:
                    // all other status will be in transit status 
                    this.imageTracker="./assets/image/step-3.png"
                    break;
            }

            trackerData.push({"data" : trackerID, "image" : this.imageTracker})
    
        });

        this.trackerListRecon = trackerData

        this.trackCode = ""

    }, error => {
        // Swal.fire("Backend Error!", "Error : <small style='color: red; font-style: italic;'>" + error.error.message + "</small>", "error")
        this.trackerDisplay = false


        // looking for ShipmentRef

        let data = { 
            "SearchType" : "ShipmentRef",
            "ShipmentRef" : dataArr 
        }

        this.apiService.postTracker(data).subscribe((res: any) => {
            // console.log('raw resp:', res)
    
            this.trackerDisplay = true
    
            this.trackerList = res
    
            let trackerData = []
    
            this.trackerList.forEach(trackerID => {
    
                // check 1st object since it is the latest status 
                let trackingstatus = trackerID[0]
    
                console.log('tracking status: ', trackingstatus)
    
                switch (trackingstatus.Status) {
                    case "Delivered":
                        this.imageTracker="./assets/image/step-5.png"
                        break;
                    case "Out for Delivery":
                        this.imageTracker="./assets/image/step-4.png"
                        break;
                    case "Order Placed":
                        this.imageTracker="./assets/image/step-1.png"
                        break;
                    default:
                        // all other status will be in transit status 
                        this.imageTracker="./assets/image/step-3.png"
                        break;
                }
    
                trackerData.push({"data" : trackerID, "image" : this.imageTracker})
        
            });
    
            this.trackerListRecon = trackerData
    
            this.trackCode = ""
    
        }, error => {
            Swal.fire("Not Found!", "Error : <small style='color: red; font-style: italic;'>Item Not Found!</small>", "error")
            this.trackerDisplay = false
            
        }) 

        
    }) 

    
    setTimeout(() => {;
        this.visible = false
        this.viewportScroller.scrollToAnchor(elementId);
    }, 1500);
    
  }

  goToPitstop(){
    this.route.navigate(['pitstop']);
  }

  goToQuote(){
    this.route.navigate(['quotation']);
  }

  openPromo(){
    window.open('https://lineclearexpress.com/doc/promo.pdf', '_blank');
  }

  openApp(){
    window.open('https://apps.apple.com/my/app/line-clear-oms/id1555210200', '_blank');
  }

}

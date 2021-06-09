import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lineclear';

  constructor(
    private facebookService: FacebookService,
    private metaService: Meta,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.initFacebookService();

    this.titleService.setTitle("Scan 2 Delivery Express Malaysia | Line Clear Express")

    const metaDesc = this.metaService.getTag('name=description'); 

    if(!metaDesc){

        this.metaService.addTags([
            {name: "description", content: "Provides nationwide courier and  integrated supply chain management solutions from warehousing, pick and pack, last mile delivery and track and trace. Customers are empowered through the Line Clear's smart Scan2Deliver technology to make end-to-end delivery using the web or app."}
        ]);
    }else{

        this.metaService.updateTag(  
            { name: "description", content: "Provides nationwide courier and  integrated supply chain management solutions from warehousing, pick and pack, last mile delivery and track and trace. Customers are empowered through the Line Clear's smart Scan2Deliver technology to make end-to-end delivery using the web or app." },  
            "name=description"  
          )  
    }
  }

  private initFacebookService(): void {
    const initParams: InitParams = { xfbml:true, version:'v3.2'};
    this.facebookService.init(initParams);
  }

}

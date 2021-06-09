import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
        this.titleService.setTitle("About Us | Express Delivery Service | Line Clear Express")

        const metaDesc = this.metaService.getTag('name=description'); 

        if(!metaDesc){
            this.metaService.addTags([
                {name: "description", content: "Line Clear provides integrated supply chain management solutions from warehousing, moving, pick and pack, last mile delivery and track and trace. Customers are empowered through the Line Clear's smart Scan2Deliver technology to make end-to-end delivery using the web or app."}
            ]);
        }else{
            this.metaService.updateTag(  
                {name: "description", content: "Line Clear provides integrated supply chain management solutions from warehousing, moving, pick and pack, last mile delivery and track and trace. Customers are empowered through the Line Clear's smart Scan2Deliver technology to make end-to-end delivery using the web or app." },  
                "name=description"  
            )  
        }
  }

}

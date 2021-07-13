import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    faq_collection: any;
    showAll: boolean = false;

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle("Frequent Ask Question")

    const metaDesc = this.metaService.getTag('name=description'); 

    if(!metaDesc){
        this.metaService.addTags([
            {name: "description", content: "Questiones related to Line Clear Express"}
        ]);
    }else{
        this.metaService.updateTag(  
            {name: "description", content: "Questiones related to Line Clear Express" },  
            "name=description"  
        )  
    }

    this.retrieveFaqList();

  }

  retrieveFaqList(){

    this.apiService.getFaqList().subscribe((res: any) => {

        console.log('response: ', res)

        this.faq_collection = res.data;

    }, error => {
        console.log('getFaqList API Failed')
    }) 

  }

  clickHandler(){
    //   alert('here')

      var toggle = document.getElementsByClassName('expand');
      alert(toggle)

    
  }

  showAllTrigger(){
      this.showAll = !this.showAll;

    //   alert(this.showAll)
  }

}

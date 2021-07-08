import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    faq_collection: any;
    showAll: boolean = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    console.log('MASOK')
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

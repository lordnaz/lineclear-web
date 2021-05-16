import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-tnc-carriage',
  templateUrl: './tnc-carriage.component.html',
  styleUrls: ['./tnc-carriage.component.css']
})
export class TncCarriageComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Terms & Condition of Carriage | Line Clear Express")
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.css']
})
export class TncComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Terms & Conditions | Line Clear Express")
  }

}

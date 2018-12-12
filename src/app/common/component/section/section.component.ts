import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {

  constructor(public _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}

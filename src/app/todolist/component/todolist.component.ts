import { InfoButtonComponent } from './../../common/component/info-button/info-button.component';
import { SectionComponent } from './../../common/component/section/section.component';
import { Component, OnInit, QueryList, ViewChild, ViewChildren, ComponentFactory, ComponentFactoryResolver, AfterViewInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit, AfterViewInit {

  @ViewChild('sectionDiv', { read: ViewContainerRef }) sectionDiv;
  @ViewChild('templateDiv') templateDiv;
  @ViewChildren(SectionComponent) sectionComponent: QueryList<SectionComponent>;
  
  m_infoButtonFactory: ComponentFactory<InfoButtonComponent>;
  m_sectionArr;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.m_infoButtonFactory = this.componentFactoryResolver.resolveComponentFactory(InfoButtonComponent);
  }

  ngAfterViewInit() {
    // this.m_sectionArr = this.sectionComponent.reduce((result, section, index) => {
    //   return result;
    // })
    this.sectionComponent.forEach(section => {
      section._viewContainerRef.createComponent(this.m_infoButtonFactory);
    });   

    this.sectionDiv.createEmbeddedView(this.templateDiv)
  }
}
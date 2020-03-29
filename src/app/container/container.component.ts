import { IndexComponent } from './../index/index.component';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @ViewChild('formTemplate', { read: ViewContainerRef }) formRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  RenderHomeForm() {
    this.formRef.clear();
    const homeComponent = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);
    const componentRef = this.formRef.createComponent(homeComponent);
    componentRef.instance.title = 'This is home page';
  }

  RenderIndexForm() {
    this.formRef.clear();
    const indexComponent = this.componentFactoryResolver.resolveComponentFactory(IndexComponent);
    const componentRef = this.formRef.createComponent(indexComponent);
    componentRef.instance.title = 'This is Index Page';
  }

  RenderWelcomeForm() {
    this.formRef.clear();
    const welcomeComponent = this.componentFactoryResolver.resolveComponentFactory(WelcomeComponent);
    const componentRef = this.formRef.createComponent(welcomeComponent);
    componentRef.instance.title = 'This is Welcome page';
  }
}

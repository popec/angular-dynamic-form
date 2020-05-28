import {
  Component,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Cmp1Component} from '../cmp1/cmp1.component';
import {Cmp2Component} from '../cmp2/cmp2.component';

@Component({
  selector: 'app-sample-editor',
  templateUrl: './sample-editor.component.html',
})
export class SampleEditorComponent {
  @ViewChild('vc', { read: ViewContainerRef }) vc;
  @Input() set source(value) {
    this.loadComponent(value);
  }
  @Input() destination: any;
  details = {};

  constructor(private cfr: ComponentFactoryResolver) {}

  private loadComponent(value) {
    if (!this.vc) {
      return;
    }

    const cmp = (value === 'test') ? Cmp2Component : Cmp1Component;
    const key = (value === 'test') ? 'a' : 'b';
    this.details[key] = Object.assign({}, this.details[key]);
    const data = Object.assign(this.destination, { details: this.details[key] });
    const componentFactory = this.cfr.resolveComponentFactory(cmp);
    this.vc.clear();

    const componentRef = this.vc.createComponent(componentFactory);
    componentRef.instance.data = data;
  }
}

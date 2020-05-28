import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html'
})
export class Cmp2Component {
  @Input() data;
}

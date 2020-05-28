import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html'
})
export class Cmp1Component {
  @Input() data;
}

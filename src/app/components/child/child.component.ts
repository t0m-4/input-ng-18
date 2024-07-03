import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
  <p>Child component</p>
  <p>name : {{name}}</p>
  <p>address : {{address}}</p>
  <p>phone : {{phone()}}</p>
  `,
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent extends BaseComponent {
  @Input() name: string = '';
}

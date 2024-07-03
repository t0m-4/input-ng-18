import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected info: { address: string, name: string, phone: string } = {
    address: 'initial address',
    name: 'initial name',
    phone: '0000..'
  };

  protected updateValues(customName: string, customAddress: string, phone: string): void {
    this.info = {
      name: customName,
      address: customAddress,
      phone: phone
    }
  }
}

import { Directive, Input, signal } from "@angular/core";

@Directive()
export class BaseComponent {
    @Input() address: string = '';
    phone = signal<string>('');
}
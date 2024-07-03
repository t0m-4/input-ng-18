import { Component, Directive, Input, signal } from "@angular/core";

@Directive()
// @Component({ template: '' }) // Also not working
export class BaseComponent {
    @Input() address: string = '';
    phone = signal<string>('');
}
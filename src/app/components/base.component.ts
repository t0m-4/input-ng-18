import { Component, Directive, Input, signal } from "@angular/core";

@Component({ template: '' })
export class BaseComponent {
    @Input() address: string = '';
    phone = signal<string>('');
}
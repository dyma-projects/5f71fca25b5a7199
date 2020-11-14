import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[color]'
})
export class ColorDirective {
    private element: ElementRef;

    constructor(el:ElementRef) {
        this.element = el;
    }

    @HostListener('window:keydown', ['$event']) windowClick(event: KeyboardEvent) {
        this.element.nativeElement.style.color = Colors[event.key];
    }
}

enum Colors {
    ArrowUp = 'red',
    ArrowLeft = 'yellow',
    ArrowRight = 'blue',
    ArrowDown = 'green'
}
import { Directive, ElementRef, HostListener, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateformat]'
})
export class DateformatDirective implements AfterViewInit{
  private key: string;

  constructor(private element: ElementRef,private renderer: Renderer2) {

  }

  @HostListener('input',['$event.target'])
  onchange({value}){
    if(!this.key || this.key != 'Backspace'){
      if(value.length === 2 || value.length === 5){
        this.element.nativeElement.value += '/'
      }
    }
  }

  @HostListener('keydown',['$event'])
  onKeyPress({key}:{key:string}){
    this.key = key;
  }

 ngAfterViewInit(){
   this.renderer.setAttribute(this.element.nativeElement, 'maxLength','10')
 }
}

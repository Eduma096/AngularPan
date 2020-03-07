import { Directive, ElementRef, HostListener, AfterViewInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appCpfFormat]'
})
export class CpfFormatDirective {
  private key: string;

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  @HostListener('input',['$event.target'])
  onchange({value}){


            
    }
  }

  @HostListener('keydown',['$event'])
  onKeyPress({key}):{key:string}){
    this.key = key;
  }

  ngAfterViewInit(){
    this.renderer.setAttribute(this.Element.native, 'maxLength','')
  }

}

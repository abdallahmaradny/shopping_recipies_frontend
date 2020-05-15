import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen=false
  constructor(private renderer:Renderer2,private elRef:ElementRef) { }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.isOpen=true
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','red')
    // this.backgroundColor=this.clickedColor
  }
  @HostListener('mouseleave') mouseleft(eventData:Event){
    this.isOpen=false
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','red')
    // this.backgroundColor=this.clickedColor
  }
}

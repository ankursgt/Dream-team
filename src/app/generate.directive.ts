import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGenerate]'
})
export class GenerateDirective {

  constructor(private tempref: TemplateRef<any>, private viewcontref: ViewContainerRef) { }

  

  @Input() set appGenerate(count: number){
    if(count && count>0) {
      length = count;
      for(var i=0;i<count;i++){

        
        this.viewcontref.createEmbeddedView(this.tempref);
        
      }
    }
    else {
      this.viewcontref.clear();

    }
  }
}

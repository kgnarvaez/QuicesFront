import { Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef } from '@angular/core';

import { AuthComponent } from './auth/auth.component';

@Directive({
  selector: '[appShowed]'
})
export class ShowedDirective implements OnInit {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userAuth: AuthComponent,
    ) {}


  condition: boolean;


ngOnInit() {
  console.log('Llama appShowed' + this.condition + this.userAuth.isSubmitting);
  if (this.condition && this.userAuth.isSubmitting) {
      this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
    this.viewContainer.clear();

  }

}
  @Input() set appShowed(condition: boolean) {
    console.log('condicion' + condition );
    this.condition = condition;
}
}

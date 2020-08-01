import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appRepeat') set render(amount: number) {
    // Empty the current container
    this.viewContainer.clear();

    // Create the template the specified number of times
    for (let i = 0; i < amount; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}

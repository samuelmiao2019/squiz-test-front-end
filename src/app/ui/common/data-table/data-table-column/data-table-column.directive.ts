import {
  Directive,
  Input,
  TemplateRef
} from '@angular/core';

@Directive({
  selector: '[appDataTableColumn]'
})
export class DataTableColumnDirective {

  @Input() columnId: string;

  constructor(private templateRef: TemplateRef<any>) {
  }

  public getColumnId(): string {
    return this.columnId;
  }

  public getTemplate(): TemplateRef<any> {
    return this.templateRef;
  }
}

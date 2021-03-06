import { Directive, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Directive({ selector: '[appNgTablePaging]' })
export class NgTablePagingDirective {
  @Input() public ngTablePaging: Boolean = true;
  @Output() public tableChanged: EventEmitter<any> = new EventEmitter();

  @Input()
  public get config(): any {
    return this.ngTablePaging;
  }

  public set config(value: any) {
    this.ngTablePaging = value;
  }

  @HostListener('pagechanged', ['$event'])
  public onChangePage(event: any): void {
    // Object.assign(this.config, event);
    if (this.ngTablePaging) {
      this.tableChanged.emit({ paging: event });
    }
  }
}

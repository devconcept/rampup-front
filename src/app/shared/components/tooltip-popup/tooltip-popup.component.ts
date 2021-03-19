import {ChangeDetectorRef, Component, HostListener, OnDestroy, TemplateRef} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  styleUrls: ['./tooltip-popup.component.scss']
})
export class TooltipPopupComponent implements OnDestroy {
  tooltipContent: TemplateRef<any>;
  $wrapperClick = new Subject();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {

  }

  @HostListener('click')
  private wrapperClick(): void {
    this.$wrapperClick.next();
  }

  updateTemplate(template: TemplateRef<any>): void {
    this.tooltipContent = template;
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.$wrapperClick.complete();
  }
}

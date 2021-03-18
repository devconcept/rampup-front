import {ChangeDetectorRef, Component, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  styleUrls: ['./tooltip-popup.component.scss']
})
export class TooltipPopupComponent {
  tooltipContent: TemplateRef<any>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {

  }

  updateTemplate(template: TemplateRef<any>): void {
    this.tooltipContent = template;
    this.changeDetectorRef.detectChanges();
  }
}

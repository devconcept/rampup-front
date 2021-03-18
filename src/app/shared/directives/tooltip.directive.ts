import {ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {merge, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import { TooltipPopupComponent } from '@shared/components';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {
  private $destroy = new Subject();
  private $newInstance = new Subject();
  private overlayRef: OverlayRef;
  private portalInstance: ComponentRef<TooltipPopupComponent>;
  @Input() appTooltip: TemplateRef<any>;

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  @HostListener('click')
  private onClick(): void {
    this.showTooltip();
  }

  private createOverlay(): void {
    this.overlayRef = this.overlay.create({
      disposeOnNavigation: true,
      hasBackdrop: false,
      positionStrategy: this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions([{
        originX: 'center',
        originY: 'bottom',
        offsetX: 0,
        offsetY: 58,
        overlayX: 'center',
        overlayY: 'bottom'
      }])
    });
  }

  private updateTemplate(): void {
    if (this.portalInstance) {
      this.portalInstance.instance.updateTemplate(this.appTooltip)
    }
  }

  private showTooltip(): void {
    console.log('click');
    if (!this.overlayRef) {
      this.createOverlay();
    }
    this.$newInstance.next();
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
    const portal = new ComponentPortal(TooltipPopupComponent, this.viewContainerRef);
    this.portalInstance = this.overlayRef.attach(portal);
    this.updateTemplate();
    this.overlayRef.backdropClick().pipe(
      tap(() => this.detachOverlay()),
      takeUntil(merge(this.$destroy, this.$newInstance)),
    ).subscribe();
  }

  private detachOverlay(): void {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this.portalInstance = null;
    }
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
    this.$newInstance.complete();
    if (this.overlayRef) {
      this.detachOverlay();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}

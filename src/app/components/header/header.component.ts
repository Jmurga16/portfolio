import { Component, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { isPlatformBrowser } from '@angular/common';
import { WindowRef } from '../../services/window-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isNavbarTransparent = true;
  isDarkMode = false;
  isMobile: boolean = false
  currentLanguage: string = 'es';


  constructor(
    private renderer: Renderer2,
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private windowRef: WindowRef,
  ) {
    this.checkMobile(true);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobile(false);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop;
    this.isNavbarTransparent = offset < 500;
  }

  checkMobile(init?: boolean) {
    if (isPlatformBrowser(this.platformId) && this.windowRef.nativeWindow) {
      this.isMobile = (this.windowRef.nativeWindow.innerWidth <= 576);
      if (this.isMobile && init) {
        this.toggleDarkMode(true);
      }
    }
  }

  async changeLanguage(language: string) {
    this.currentLanguage = language;
    await this.translateService.getData('assets/i18n/', language)
  }

  toggleDarkMode(isDarkMode?: boolean) {

    this.isDarkMode = isDarkMode ? isDarkMode : !this.isDarkMode;

    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.renderer.removeClass(document.body, 'light-mode');
    }
    else {
      this.renderer.addClass(document.body, 'light-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

}

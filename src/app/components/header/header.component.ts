import { Component, HostListener, Renderer2 } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isNavbarTransparent = true;
  isDarkMode = false;

  constructor(
    private renderer: Renderer2,
    private translateService: TranslateService
  ) {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop;
    this.isNavbarTransparent = offset < 500;
  }

  currentLanguage: string = 'es';

  async changeLanguage(language: string) {
    this.currentLanguage = language;

    await this.translateService.getData('assets/i18n/', language)
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.renderer.removeClass(document.body, 'light-mode');
    } else {
      this.renderer.addClass(document.body, 'light-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  //chk = document.getElementById('chk');

  /* chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  }); */


}

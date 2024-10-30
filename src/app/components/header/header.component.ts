import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  /**
   *
   */
  constructor(
    private translateService: TranslateService
  ) {

  }

  //chk = document.getElementById('chk');

  /* chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  }); */

  currentLanguage: string = 'spanish';

  async changeLanguage(language: string) {
    await this.translateService.getData('assets/i18n/', language)
    
    this.currentLanguage = language;
  }


}

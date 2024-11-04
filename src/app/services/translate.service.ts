import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private data: any;
  private isBrowser: boolean;
  
  constructor(
    private httpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Verifica si el entorno es el navegador
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  getData(path: string, language?: string) {
    return new Promise((resolve, reject) => {
      if (!language) {
        language = this.isBrowser ? navigator.language : 'es';
      }
      this.httpClient.get(path + language + ".json").subscribe({
        next: (data) => {
          this.data = data
          resolve(true);
        },
        error: (error) => {
          //console.error(error)
          console.clear();
          this.httpClient.get(path + "es.json").subscribe({
            next: (data) => {
              this.data = data
              resolve(true);
            },
            error: (err) => {
              resolve(false)
            }
          })
        }
      })
    })
  }

  getTranslate(key: string): string {
    return this.data ? this.data[key] : key
  }
}

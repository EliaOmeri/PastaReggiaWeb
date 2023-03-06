import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>{{ 'HELLO' | translate }}</h1>
//     <p>{{ 'WELCOME' | translate }}</p>
//   `
// })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pastareggia-app';

  constructor(private translate: TranslateService) {
    translate.addLangs(['al','it']);
    translate.setDefaultLang('al');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}

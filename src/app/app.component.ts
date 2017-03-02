import { Component, NgModule, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppService } from './app.service'
@Component({
  selector: 'app-root',
  template: `
      <h2>The most isolated country(ies): {{mostIsolatedCountry}}</h2>
      <missions-table></missions-table>
  `,
  styles: [`
      h2{
        text-align: center;
      }
    `],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  mostIsolatedCountry: string;

  constructor(private _appService: AppService) {
  }


  ngOnInit(): void {
    this.mostIsolatedCountry = this._appService.getMostIsolatedCountries();
  }
}

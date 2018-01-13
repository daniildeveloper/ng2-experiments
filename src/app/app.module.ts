import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { FormsModule } from '@angular/forms';
import { Ng2TableModule } from './components/nomenclature/ng-table-module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    Ng2TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

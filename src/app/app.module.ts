import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { LoggerService } from './services/logger.service';

import { ProductsComponent } from './products.component';

@NgModule({
  
 
 declarations: [
    ProductsComponent,
    TopBarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

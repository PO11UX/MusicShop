import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { LogoComponent } from './top/logo/logo.component';
import { NavbarComponent } from './top/navbar/navbar.component';
import { GridImageComponent } from './grid-image/grid-image.component';
import { ProductsComponent } from './products/products.component';
import { GuitarsComponent } from './products/guitars/guitars.component';
import { DrumsComponent } from './products/drums/drums.component';
import { PianoComponent } from './products/piano/piano.component';
import { LaunchpadsComponent } from './products/launchpads/launchpads.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LogoComponent,
    NavbarComponent,
    GridImageComponent,
    ProductsComponent,
    GuitarsComponent,
    DrumsComponent,
    PianoComponent,
    LaunchpadsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

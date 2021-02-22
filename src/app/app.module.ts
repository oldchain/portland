import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { SideNavComponent } from './header/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { CarousalComponent } from './home/carousal/carousal.component';
import { FilterComponent } from './home/filter/filter.component';
import { ProductComponent } from './product/product.component';
import { BestSellerComponent } from './home/best-seller/best-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    SideNavComponent,
    HomeComponent,
    CarousalComponent,
    FilterComponent,
    ProductComponent,
    BestSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

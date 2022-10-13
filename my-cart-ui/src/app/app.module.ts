import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { OrderComponent } from './components/order/order.component';
import { WatchComponent } from './components/products/watch/watch.component';
import { HeadphonesComponent } from './components/products/headphones/headphones.component';
import { ProductComponent } from './components/products/product/product.component';
import { GridCardComponent } from './shared/componens/grid-card/grid-card.component';
import { HeaderComponent } from './shared/template/header/header.component';
import { FooterComponent } from './shared/template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './services/product.service';
import { MyCartService } from './services/my-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    MyCartComponent,
    OrderComponent,
    WatchComponent,
    HeadphonesComponent,
    ProductComponent,
    GridCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule

   
  ],
  providers: [
    ProductService,
    MyCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

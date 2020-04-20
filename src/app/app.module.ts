import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { ProductManagerComponent } from './product-manager/product-manager.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, SlideComponent, ProductComponent, ProductManagerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService],

})
export class AppModule { }

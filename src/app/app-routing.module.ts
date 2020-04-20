import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductListComponent } from "./product-list/product-list.component";


const routers: Routes = [
{path:"quanli", component:ProductManagerComponent},

{path:"sanpham", component:ProductListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

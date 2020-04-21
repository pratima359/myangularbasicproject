import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CardComponent } from './card/card.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes:Routes=[
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'product', children:[
  {path:'', component:ProductComponent},
  {path:'laptop', component:LaptopComponent},
  {path:'mobole', component:MobileComponent}
]},
{path:'**', component:NotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    CardComponent,
    LaptopComponent,
    MobileComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ShowedDirective } from './showed.directive';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    ShowedDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    ShowedDirective
  ],
  providers: [AuthComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

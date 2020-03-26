import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavComponent } from './nav/nav.component';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    NavComponent,
    CreateTenderComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'tenders', component: HomeComponent },
      { path: 'tenders/new', component: CreateTenderComponent },
      { path: '**', component: HomeComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

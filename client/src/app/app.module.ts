import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import{MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';;

import {MatTabsModule} from '@angular/material/tabs';

import{FormsModule} from '@angular/forms';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,

    MatInputModule,
    FormsModule,
    NgModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

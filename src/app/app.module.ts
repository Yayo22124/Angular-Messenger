import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { ToolBarComponent } from './componentes/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavBarComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ToolBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

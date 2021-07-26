import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './components/template/sidenav/sidenav.component'; 
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './views/home/home.component';
import { InputsComponent } from './views/inputs/inputs.component';
import { OutsComponent } from './views/outs/outs.component'; 
import { MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './views/login/auth.service';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent, DialogContentExampleDialog } from './views/dialog/dialog.component';
import { EntradaComponent } from './views/entrada/entrada.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    InputsComponent,
    OutsComponent,
    LoginComponent,
    DialogComponent,
    DialogContentExampleDialog,
    EntradaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    

    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

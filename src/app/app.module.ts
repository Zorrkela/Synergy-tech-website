import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { KontaktComponent } from './pages/srb/kontakt/kontakt.component';
import { ContactComponent } from './pages/en/contact/contact.component';
import { OnamaComponent } from './pages/srb/onama/onama.component';
import { AboutComponent } from './pages/en/about/about.component';
import { ProjectsComponent } from './pages/en/projects/projects.component';
import { ProjektiComponent } from './pages/srb/projekti/projekti.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ServicesComponent } from './pages/en/services/services.component';
import { DelatnostiComponent } from './pages/srb/delatnosti/delatnosti.component';
import { PocetnaComponent } from './pages/srb/pocetna/pocetna.component';
import { HomeComponent } from './pages/en/home/home.component';
import { NavbarEnComponent } from './pages/en/navbar-en/navbar-en.component';
import { FooterEnComponent } from './pages/en/footer-en/footer-en.component';
import { SertifikatiComponent } from './sertifikati/sertifikati.component';
import { CertificatesComponent } from './pages/en/certificates/certificates.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    KontaktComponent,
    ContactComponent,
    OnamaComponent,
    AboutComponent,
    ProjectsComponent,
    ProjektiComponent,
    ServicesComponent,
    DelatnostiComponent,
    PocetnaComponent,
    HomeComponent,
    NavbarEnComponent,
    FooterEnComponent,
    SertifikatiComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

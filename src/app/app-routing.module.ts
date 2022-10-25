import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/en/about/about.component';
import { CertificatesComponent } from './pages/en/certificates/certificates.component';
import { ContactComponent } from './pages/en/contact/contact.component';
import { HomeComponent } from './pages/en/home/home.component';
import { ProjectsComponent } from './pages/en/projects/projects.component';
import { ServicesComponent } from './pages/en/services/services.component';
import { DelatnostiComponent } from './pages/srb/delatnosti/delatnosti.component';
import { KontaktComponent } from './pages/srb/kontakt/kontakt.component';
import { OnamaComponent } from './pages/srb/onama/onama.component';
import { PocetnaComponent } from './pages/srb/pocetna/pocetna.component';
import { ProjektiComponent } from './pages/srb/projekti/projekti.component';
import { SertifikatiComponent } from './sertifikati/sertifikati.component';


const routes: Routes = [
  {path: '', redirectTo: '/pocetna', pathMatch: 'full' },
  {path: 'kontakt', component: KontaktComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'onama', component: OnamaComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projekti', component: ProjektiComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'delatnosti', component: DelatnostiComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'pocetna', component: PocetnaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sertifikati', component: SertifikatiComponent},
  {path: 'sertificates', component: CertificatesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

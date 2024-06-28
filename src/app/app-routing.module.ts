import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PanelsComponent } from './modules/panels/panels.component';
import { InvertersComponent } from './modules/inverters/inverters.component';
import { BatteryComponent } from './modules/battery/battery.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solar-panels', component: PanelsComponent },
  { path: 'inverters', component: InvertersComponent },
  { path: 'batteries', component: BatteryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

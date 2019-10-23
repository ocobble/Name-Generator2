import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillageComponent } from './village/village.component';
import { NameComponent } from './name/name.component';


const routes: Routes = [
  { path: 'village', component: VillageComponent },
  { path: 'name', component: NameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

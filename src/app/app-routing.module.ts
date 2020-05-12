import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from '../app/components/technologies/technologies.component';
import { ObjectivesComponent } from '../app/components/objectives/objectives.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';
import { ObjectiveDetailsComponent } from './components/objective-details/objective-details.component';

const routes: Routes = [ //define all possible routes here
  //{ path: '', component : ObjectivesComponent},
  { path: '', redirectTo: 'objectives', pathMatch: 'full'},
  { path: 'objectives', component: ObjectivesComponent },
  { path: 'objectives/:id', component: ObjectiveDetailsComponent},
  { path: 'technologies', component: TechnologiesComponent},
  { path: '**', component: PageNotFoundComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

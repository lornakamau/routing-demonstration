import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ObjectiveDetailsComponent } from './components/objective-details/objective-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
    ObjectivesComponent,
    PageNotFoundComponent,
    ObjectiveDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

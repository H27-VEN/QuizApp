import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { QlistComponent } from './components/qlist/qlist.component';
import { FetchQuestionService } from './services/fetch-question-service';
import { SharedService } from './services/shared.service';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent, data: { sub: 'home' } },
  { path: 'quiz/sports',  component: QlistComponent,  data: {sub: 'sports'} },
  { path: 'quiz/movies',  component: QlistComponent,  data: {sub: 'movies' } },
  { path: 'quiz/history',  component: QlistComponent,  data: {sub: 'history'} },
  { path: 'quiz/geography', component: QlistComponent, data: {sub: 'geography'} }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    QlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FetchQuestionService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

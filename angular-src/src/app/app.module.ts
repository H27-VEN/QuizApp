import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { ContainerComponent } from './components/container/container.component';
import { QlistComponent } from './components/qlist/qlist.component';
import { FetchQuestionService } from './services/fetch-question-service';
import { SharedService } from './services/shared.service';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    ContainerComponent,
    QlistComponent
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

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { DataService } from './shared/data.service';
import { ShapeChartComponent } from './shape-chart/shape-chart.component';
import { ReactChartComponent } from './react-chart/react-chart.component';
import { ReactAvatarComponent } from './react-avatar/react-avatar.component';
import { InterpolateChartComponent } from './interpolate-chart/interpolate-chart.component';
import { SigninComponent } from './signin/signin.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubService } from './shared/services/github.service';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    ShapeChartComponent,
    ReactChartComponent,
    ReactAvatarComponent,
    InterpolateChartComponent,
    SigninComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

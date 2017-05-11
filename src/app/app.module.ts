import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { GraphComponent } from './graph.component';
import { GraphService } from './graph.service';
import { SecretService } from './secret.service';
import { RouteGuard } from './RouteGuard';
import { LoginComponent } from './login.component';
import { AdalService } from "ng2-adal/core";
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';

var routeConfig = [
  {
    path: 'graph',
    component: GraphComponent,
    canActivate: [RouteGuard]
  },
  { path: 'logout', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routeConfig), HttpModule ],
  declarations: [AppComponent, GraphComponent, LoginComponent ],
  providers: [GraphService, SecretService, AdalService, RouteGuard, provideAuth({
    //headerName: 'Authorization',
    //headerPrefix: 'Bearer',
    tokenGetter: (() => localStorage.getItem('access_token')),
    //globalHeaders: [{ 'Content-Type': 'application/json' }],
    //noJwtError: false
  }) ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

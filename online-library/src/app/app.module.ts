import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: SignupComponent}
];

@NgModule({
  // Registration of components
  declarations: [
    AppComponent
  ],
  // Using other modules.
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    // To Configure routing
    RouterModule.forRoot(routes)
  ],
  // Provide services
  providers: [],
  // Startup component
  bootstrap: [AppComponent]
})
export class AppModule { }

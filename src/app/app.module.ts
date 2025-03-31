import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './services/interceptor.service';
import { RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module'; 
import { AppComponent } from './app.component';
import { LoginService } from './pages/login/service/login.service';
import { ImportsModule } from './imports';
import { MenuComponent } from './components/menu/menu.component';
import { PatientManagementModule } from './pages/patient-management/patient-management.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LoginModule,
    PatientManagementModule,
    ImportsModule       
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    LoginService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/security/login/login.component';
import { IndexComponent } from './components/views/index/index.component';
import { HttpInterceptorService } from './components/security/httpinterceptor.service';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: LoginComponent
    },
    {
        path: 'index',
        component: IndexComponent,
    canActivate: [ HttpInterceptorService ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddViewUserComponent } from './add-view-user/add-view-user.component';
import { UserAccessGuard } from './service/AuthGuard';
import { ExpenditureComponent } from './expenditure/expenditure.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    // otherwise redirect to home
    

{
  path: 'login', component: UserLoginComponent 
},
{
  path:'expenditure', component: ExpenditureComponent 
},
{
  path: 'user', component: AddViewUserComponent,canActivate: [UserAccessGuard]
},
{ path: '**', redirectTo: '/login' },



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

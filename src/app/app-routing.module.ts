import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddViewUserComponent } from './add-view-user/add-view-user.component';

const routes: Routes = [
  {
      path: 'login',
      component: UserLoginComponent
  },
  {
    path: 'user',
    component: AddViewUserComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

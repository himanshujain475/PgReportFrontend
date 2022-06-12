import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
      path: 'user',
      component: UserLoginComponent
  },
  {
    path: 'expenditure',
    component: ExpenditureComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

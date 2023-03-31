import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DataInputComponent } from './data-input/data-input.component';
import { LoginComponent } from './login/login.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'data-input', component: DataInputComponent, canActivate: [AuthGuard]},
  {path: 'visual', component: VisualComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

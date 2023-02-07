import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'registration',
  },
  {
    path: 'registration',
    component: RegistrationFormComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form',
      },
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: 'report',
        component : ReportComponent
      },
      {
        path: '**',
        component: FormComponent,
      },
    ],
  },
  {
    path: '**',
    component: RegistrationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

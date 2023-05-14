import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'contact',
   component: ContactComponent
  },
  {path:'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)},
  {
     path: '', pathMatch:'full', redirectTo:'articles'
  },
  {path:'**' , /* two asteriks wildcard route*/ redirectTo:'articles'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

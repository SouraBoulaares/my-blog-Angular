import { NgModule } from'@angular/core';
import { Routes, RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';

const Routes : Routes = [{ path: '', component: ArticlesComponent}];
@NgModule({
    imports: [RouterModule.forChild(Routes)],
    exports: [RouterModule]
    })
    export class ArticlesRoutingModule { }
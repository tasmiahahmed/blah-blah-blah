import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
{path: '', component: HomeComponent,
children:[
{path: 'insert', component: InsertComponent},
{path: 'delete', component: DeleteComponent},
{path: 'find', component: FindComponent}]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
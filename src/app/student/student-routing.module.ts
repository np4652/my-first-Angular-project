import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {IndexComponent} from './index/index.component';
import  {EditComponent} from './edit/edit.component';


const routes: Routes = [{ path: 'student/index', component: IndexComponent },
{ path: 'student/edit', component: EditComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

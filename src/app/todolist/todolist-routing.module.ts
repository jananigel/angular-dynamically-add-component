import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './component/todolist.component';
import { NgModule } from '@angular/core';

const routingArr: Routes = [
    {path: '', component: TodolistComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routingArr)],
    exports: [RouterModule]
})

export class TodoListRoutingModule {}
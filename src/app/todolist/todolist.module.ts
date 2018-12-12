import { SectionComponent } from './../common/component/section/section.component';
import { TodoListRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './component/todolist.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [TodoListRoutingModule],
    declarations: [TodolistComponent, SectionComponent]
})

export class TodoListModule {}
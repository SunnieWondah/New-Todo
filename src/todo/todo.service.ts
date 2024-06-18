import { Injectable } from '@nestjs/common';
import { TodoModel } from './todo.model';

@Injectable()
export class TodoService {
    _tasks: TodoModel[] = [
        {id:1, description: 'Feed the Dog'},
        {id:2, description: 'Clean the Car'},
        {id:3, description: 'Charge my Phone'}
    ]

    findAllTasks(): TodoModel[] {
        return this._tasks;
    }

    findTasksById(id:number):TodoModel{
        return this._tasks.find(t => t.id == id);
    }

}

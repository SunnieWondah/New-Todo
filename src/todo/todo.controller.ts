import { Controller, Get, NotFoundException, NotImplementedException, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Get()
    getTodo(){
        return this.todoService.findAllTasks();
    }

    @Get(':taskId')
    getTodoById(@Param('taskId') id: number){
        let task = this.todoService.findTasksById(id);
        if (!task) {
          throw new NotFoundException(`Task with Id ${id} not found`);
            
        } else return task; 
    }
}

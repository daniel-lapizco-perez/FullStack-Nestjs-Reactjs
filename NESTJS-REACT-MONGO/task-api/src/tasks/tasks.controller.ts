import { Controller, Get, Post, Param, Delete, Body, Patch, ConflictException, NotFoundException, HttpCode, Put} from '@nestjs/common';

import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}
    
    @Get()
    findAll(){
        return this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        const tasks = await this.taskService.findOne(id);
        if(!tasks) throw new NotFoundException('Task not found');
        return tasks;
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto){
        try{
            return await this.taskService.create(createTaskDto);
        } catch (error){
            if(error.code === 11000){
                throw new ConflictException('Task already exists');
            } else if(error.message == 'Task validation failed: description: Path `description` is required.'){
                throw new ConflictException('Description can not be empty');
            }
            throw error;
        }
    }

    @Put(':id')
    @HttpCode(205)
    async update(@Param('id') id:string, @Body() updateTaskDto: UpdateTaskDto){
        const tasks = await this.taskService.update(id, updateTaskDto);
        if(!tasks) throw new NotFoundException('Task not found');
        return tasks;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id:string){
        const tasks = await this.taskService.delete(id);
        if(!tasks) throw new NotFoundException('Task not found');
        return tasks;
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/tasks.schema';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>){}

    async create(task: CreateTaskDto){
        const createTask = new this.taskModel(task);
        return createTask.save();
    }

    async findOne(id: string){
        return this.taskModel.findById(id);
    }

    async findAll(){
        return this.taskModel.find();
    }

    async update(id: string, task: UpdateTaskDto){
        return this.taskModel.findByIdAndUpdate(id, task);
    }

    async delete(id: string){
        return this.taskModel.findByIdAndDelete(id);
    }

}

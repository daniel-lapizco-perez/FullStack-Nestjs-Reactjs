/// <reference types="mongoose/types/PipelineStage" />
import { Model } from 'mongoose';
import { Task } from 'src/schemas/tasks.schema';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    create(task: CreateTaskDto): Promise<import("mongoose").Document<unknown, any, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(id: string, task: UpdateTaskDto): Promise<import("mongoose").Document<unknown, any, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, any, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

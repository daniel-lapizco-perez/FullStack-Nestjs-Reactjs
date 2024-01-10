/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose" />
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    findAll(): Promise<(import("mongoose").Document<unknown, any, import("../schemas/tasks.schema").Task> & import("../schemas/tasks.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, import("../schemas/tasks.schema").Task> & import("../schemas/tasks.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createTaskDto: CreateTaskDto): Promise<import("mongoose").Document<unknown, any, import("../schemas/tasks.schema").Task> & import("../schemas/tasks.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("mongoose").Document<unknown, any, import("../schemas/tasks.schema").Task> & import("../schemas/tasks.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, any, import("../schemas/tasks.schema").Task> & import("../schemas/tasks.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

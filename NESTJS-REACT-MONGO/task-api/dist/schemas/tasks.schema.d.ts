/// <reference types="mongoose/types/PipelineStage" />
import { HydratedDocument } from "mongoose";
export type TaskDocument = HydratedDocument<Task>;
export declare class Task {
    title: string;
    description: string;
    done: boolean;
}
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any>, any, any>;

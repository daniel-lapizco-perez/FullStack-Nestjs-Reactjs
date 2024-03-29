import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TaskDocument = HydratedDocument<Task>;

@Schema({
    timestamps: true
})
export class Task {
    @Prop({
        //requerimientos especiales
        required: true,
        unique: true,
        trim: true
    })
    title:string;

    @Prop({
        required: true,
        trim: true
    })
    description: string;

    @Prop({
        default: false
    })
    done: boolean
}

export const TaskSchema = SchemaFactory.createForClass(Task);
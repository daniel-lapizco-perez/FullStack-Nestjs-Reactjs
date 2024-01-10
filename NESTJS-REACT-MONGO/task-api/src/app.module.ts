import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: 
  [
    MongooseModule.forRoot('mongodb://localhost/task_api'),
    TasksModule
  ],
})
export class AppModule {}

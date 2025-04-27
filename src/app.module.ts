import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { DatabaseModule } from './config/database.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    DatabaseModule ,
    ProjectsModule,
    TasksModule ,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

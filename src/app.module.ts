import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { DatabaseModule } from './config/database.module';

@Module({
  imports: [
    DatabaseModule ,
    ProjectsModule ,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

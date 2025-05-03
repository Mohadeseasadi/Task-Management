import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Project } from 'src/projects/entities/project.entity';
import { ApiResponse } from 'src/utils/api-response';
import TaskStatusEnum from './enums/task-status.enum';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    const task = await this.tasksService.create(createTaskDto);
    return new ApiResponse(true , 'Task created successfully' , task)
  }

  @Get()
  async findAll(
    @Query('status') status?: TaskStatusEnum ,
    @Query('limit') limit: number=10 ,
    @Query('page') page: number=1, 
  ) {
    const tasks = await this.tasksService.findAll(status,limit,page);
    return new ApiResponse(true, 'Tasks fetched successfully' , tasks);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}

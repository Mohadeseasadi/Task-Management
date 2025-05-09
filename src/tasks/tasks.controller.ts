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
    @Query('project') projectId?: number ,
    @Query('limit') limit: number=10 ,
    @Query('page') page: number=1, 
  ) {
    const tasks = await this.tasksService.findAll(status, projectId, limit, page);
    return new ApiResponse(true, 'Tasks fetched successfully' , tasks);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.findOne(+id);
    return new ApiResponse(true , 'Task feched successfully' , task);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const updatedTask = await this.tasksService.update(+id ,updateTaskDto);
    return new ApiResponse(true , 'Task updated successfully' , updatedTask);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const task = await this.tasksService.remove(+id);
    return new ApiResponse(true , 'Project removed successfully' , null)
  }
}

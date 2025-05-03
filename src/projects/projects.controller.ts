import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import ProjectStatusEnum from './enums/project-status.enum';
import { ApiResponse } from '../utils/api-response';


@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    const project = await this.projectsService.create(createProjectDto);
    return new ApiResponse(true, 'Project created successfully', project);
  }

  @Get()
  async findAll( 
    @Query('status') status?: ProjectStatusEnum ,
    @Query('limit') limit : number = 10 ,
    @Query('page') page : number = 1 ,

  ) {
    const projects = await this.projectsService.findAll(status, limit, page);
    return new ApiResponse(true, 'Projects fetched successfully', projects);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const project = await this.projectsService.findOne(+id);
    return new ApiResponse(true, 'Project fetched successfully', project);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    const updatedProject = await this.projectsService.update(+id, updateProjectDto);
    return new ApiResponse(true, 'Project updated successfully', updatedProject);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const project = await this.projectsService.remove(+id);
    return new ApiResponse(true, 'Project removed successfully', null);
  }
}

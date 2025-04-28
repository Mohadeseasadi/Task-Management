import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import ProjectStatusEnum from './enums/project-status.enum';
import { error } from 'console';

@Injectable()
export class ProjectsService {

  constructor ( 
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ){}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      const newProject = this.projectRepository.create(createProjectDto);
      return await this.projectRepository.save(newProject);
      
    } catch (error) {
      throw new BadRequestException('Error creating project');
    }
  }

  async findAll(status?: ProjectStatusEnum, limit: number= 10, page: number= 1): Promise<Project[] |string> {
    try {
      const query = this.projectRepository.createQueryBuilder('projects');
      
      if(status) {
        query.where('status = :status' , {status})
      }

      query.skip((page - 1)* limit).take(limit) 

      return await query.getMany();
    
    } catch (error) {
      throw new BadRequestException('Error fetching project');
    }
  }

  async findOne(id: number): Promise<Project | null> {
    const project = await this.projectRepository.findOneBy({id});

    if (!project) throw new NotFoundException(`Not found project by ${id}`) ;

    return project ;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
    const project = await this.projectRepository.findOneBy({id});

    if (!project) throw new NotFoundException(`Not found project by ${id}`) ;
    try {

      const updateProject = await this.projectRepository.save({
        ...project ,
        ...updateProjectDto ,
      });
      
      return updateProject ; 

    } catch (error) {
      throw new BadRequestException('Updating project failed')
    }
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}

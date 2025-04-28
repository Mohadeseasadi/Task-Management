import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

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

  async findAll(): Promise<Project[] | string > {
    try {
      const query = this.projectRepository.createQueryBuilder('projects');
      return await query.getMany();
    } catch (error) {
      throw new BadRequestException('Error fetching project');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}

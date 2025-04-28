import ProjectStatusEnum from "../enums/project-status.enum";

export class CreateProjectDto {
    name: string ;
    
    status: ProjectStatusEnum
}

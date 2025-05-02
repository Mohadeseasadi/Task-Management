import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import ProjectStatusEnum from "../enums/project-status.enum";

export class CreateProjectDto {
    @IsNotEmpty({message: "name required"})
    @IsString()
    name: string ;
    
    @IsEnum(ProjectStatusEnum , {message: "inavlid status"})
    status: ProjectStatusEnum
}

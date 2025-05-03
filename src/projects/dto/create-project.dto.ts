import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import ProjectStatusEnum from "../enums/project-status.enum";

export class CreateProjectDto {
    @IsNotEmpty({message: "name required"})
    @IsString()
    name: string ;
    
    @IsEnum(ProjectStatusEnum , {message: "inavlid status { 0 :disable, 1 :enable }"})
    @IsOptional()
    status: ProjectStatusEnum
}

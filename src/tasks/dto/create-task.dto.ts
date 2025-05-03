import { IsEnum, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import TaskStatusEnum from "../enums/task-status.enum";

export class CreateTaskDto {

    @IsString()
    @MinLength(3 ,{ message: "min length is 3 character"})
    @IsNotEmpty()
    title: string ; 

    @IsString()
    @MinLength(10 ,{ message:  "min length is 10 character"})
    @IsOptional()
    description: string ;

    @IsEnum(TaskStatusEnum ,{ message: "invalid status ; just 'set' , 'doing' , 'done' , 'cancel'"})
    @IsOptional()
    status: TaskStatusEnum ;

    @IsNotEmpty()
    @IsNumber()
    projectId: number 

}

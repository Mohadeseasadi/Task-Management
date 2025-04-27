import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import ProjectStatusEnum from "../enums/project-status.enum";

@Entity({ name: 'projects' })
export class Project {
    
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    name: string ;

    @Column({ type: 'enum', enum: ProjectStatusEnum, default: ProjectStatusEnum.Enable })
    status: ProjectStatusEnum;

}
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ProjectStatusEnum from "../enums/project-status.enum";
import { Task } from "src/tasks/entities/task.entity";

@Entity({ name: 'projects' })
export class Project {
    
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    name: string ;

    @Column({ type: 'enum', enum: ProjectStatusEnum, default: ProjectStatusEnum.Enable })
    status: ProjectStatusEnum;

    @OneToMany(() => Task , (task) => task.project)
    tasks: Task;

}
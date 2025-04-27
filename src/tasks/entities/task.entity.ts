import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import TaskStatusEnum from "../enums/task-status.enum";

@Entity({ name: 'tasks' })
export class Task {
    
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    title: string ;

    @Column()
    description: string ;

    @Column({ type: 'enum', enum: TaskStatusEnum, default: TaskStatusEnum.Set  })
    status: TaskStatusEnum ;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import StatusEnum from "../enums/status.enum";

@Entity({ name: 'projects' })
export class Project {
    
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    name: string ;

    @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.Enable })
    status: StatusEnum;

}
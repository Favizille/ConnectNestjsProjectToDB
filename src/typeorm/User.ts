import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export  class User {

    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id:number;

    @Column({
        nullable: false,
        default: '',
    })
    username:string;

    @Column({
        nullable: false,
        default: '',
    })
    email:string;

    @Column()
    password:string;

}
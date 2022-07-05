import {DataTypes} from "sequelize";
import {Column, Table, Model, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttribute {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttribute> {
    @ApiProperty({example: '1', description: 'Unique key'})
    @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@mail.com', description: 'E-mail'})
    @Column({type: DataTypes.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'Password123', description: 'Password'})
    @Column({type: DataTypes.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Show if user banned'})
    @Column({type: DataTypes.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'For flood', description: 'Reason of ban'})
    @Column({type: DataTypes.STRING})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}
import {DataTypes} from "sequelize";
import {Column, Table, Model, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoeCreationAttribute {
    value: string
    description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoeCreationAttribute> {
    @ApiProperty({example: '1', description: 'Unique key'})
    @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'User role'})
    @Column({type: DataTypes.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Administrator', description: 'Role description'})
    @Column({type: DataTypes.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}
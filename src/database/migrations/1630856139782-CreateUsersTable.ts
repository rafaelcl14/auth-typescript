import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1630856139782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')


        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                { 
                    name: 'id_user',
                    type: 'serial',
                    isPrimary: true,
                },
                { 
                    name: 'nome',
                    type: 'varchar',
                },
                { 
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                { 
                    name: 'password',
                    type: 'varchar',
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
        await queryRunner.query('DROP EXTENSION "uuid-oss"');
    }

}

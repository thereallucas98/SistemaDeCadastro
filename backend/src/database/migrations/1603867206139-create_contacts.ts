import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createContacts1603867206139 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'contacts',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'contact',
          type: 'varchar'
        },
        {
          name: 'number',
          type: 'varchar'
        },
        // {
        //   name: 'user_id',
        //   type: 'integer'
        // }
      ],
      // foreignKeys: [
      //   {
      //     name: 'ContactList',
      //     columnNames: ['user_id'],
      //     referencedTableName: 'users',
      //     referencedColumnNames: ['id'],
      //     onUpdate: 'CASCADE',
      //     onDelete: 'CASCADE',
      //   }
      // ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacts');
  }

}

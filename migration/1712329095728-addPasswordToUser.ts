import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPasswordToUser1712329095728 implements MigrationInterface {
  name = 'AddPasswordToUser1712329095728';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` ADD \`passwordHash\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` DROP COLUMN \`passwordHash\``,
    );
  }
}

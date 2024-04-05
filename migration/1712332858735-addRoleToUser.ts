import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoleToUser1712332858735 implements MigrationInterface {
  name = 'AddRoleToUser1712332858735';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` ADD \`role\` ENUM('student', 'teacher', 'admin') NOT NULL DEFAULT 'admin'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user_entity\` DROP COLUMN \`role\``);
  }
}

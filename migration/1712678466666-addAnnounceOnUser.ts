import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAnnounceOnUser1712678466666 implements MigrationInterface {
  name = 'AddAnnounceOnUser1712678466666';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`announce_entity\` ADD \`teacherId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`announce_entity\` ADD CONSTRAINT \`FK_e464272b12eaca2f533f34f2f55\` FOREIGN KEY (\`teacherId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`announce_entity\` DROP FOREIGN KEY \`FK_e464272b12eaca2f533f34f2f55\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`announce_entity\` DROP COLUMN \`teacherId\``,
    );
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCourseEntity1712678169636 implements MigrationInterface {
  name = 'AddCourseEntity1712678169636';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`course_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` datetime NOT NULL, \`hours\` int NOT NULL, \`studentId\` int NULL, \`announceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`course_entity\` ADD CONSTRAINT \`FK_2f95cd147553855306b4acffcec\` FOREIGN KEY (\`studentId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`course_entity\` ADD CONSTRAINT \`FK_55e864ed28bfb52cf8562a28a82\` FOREIGN KEY (\`announceId\`) REFERENCES \`announce_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`course_entity\` DROP FOREIGN KEY \`FK_55e864ed28bfb52cf8562a28a82\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`course_entity\` DROP FOREIGN KEY \`FK_2f95cd147553855306b4acffcec\``,
    );
    await queryRunner.query(`DROP TABLE \`course_entity\``);
  }
}

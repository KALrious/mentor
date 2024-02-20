import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAnnounce1708437175594 implements MigrationInterface {
  name = 'AddAnnounce1708437175594';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`subject_entity\` DROP FOREIGN KEY \`FK_1380fa88fa7bb134c30d8c083b9\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_1380fa88fa7bb134c30d8c083b\` ON \`subject_entity\``,
    );
    await queryRunner.query(
      `CREATE TABLE \`announce_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` int NOT NULL, \`subjectId\` int NULL, \`levelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`subject_entity\` DROP COLUMN \`levelId\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`announce_entity\` ADD CONSTRAINT \`FK_2118f2c1988da41bcf77c75f3b2\` FOREIGN KEY (\`subjectId\`) REFERENCES \`subject_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`announce_entity\` ADD CONSTRAINT \`FK_225f58c89ce5156ea2d30e0e4a8\` FOREIGN KEY (\`levelId\`) REFERENCES \`level_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`announce_entity\` DROP FOREIGN KEY \`FK_225f58c89ce5156ea2d30e0e4a8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`announce_entity\` DROP FOREIGN KEY \`FK_2118f2c1988da41bcf77c75f3b2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`subject_entity\` ADD \`levelId\` int NULL`,
    );
    await queryRunner.query(`DROP TABLE \`announce_entity\``);
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`REL_1380fa88fa7bb134c30d8c083b\` ON \`subject_entity\` (\`levelId\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`subject_entity\` ADD CONSTRAINT \`FK_1380fa88fa7bb134c30d8c083b9\` FOREIGN KEY (\`levelId\`) REFERENCES \`level_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}

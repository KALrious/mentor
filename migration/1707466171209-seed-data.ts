import { MigrationInterface, QueryRunner } from 'typeorm';
import { formatStringToSql, initLevel, initSubject } from './data';

export class SeedData1707466171209 implements MigrationInterface {
  name = 'SeedData1707466171209';
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const level of initLevel) {
      await queryRunner.query(
        `INSERT INTO level_entity (name) VALUES (${formatStringToSql(
          level.name,
        )})`,
      );
    }
    for (const subject of initSubject) {
      await queryRunner.query(
        `INSERT INTO subject_entity (name, levelId) VALUES (${formatStringToSql(
          subject.name,
        )}, ${subject.levelId})`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM subject_entity');
    await queryRunner.query('DELETE FROM level_entity');
  }
}

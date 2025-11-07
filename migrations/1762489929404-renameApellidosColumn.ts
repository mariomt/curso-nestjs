import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameApellidosColumn1762489929404 implements MigrationInterface {
  name = 'RenameApellidosColumn1762489929404';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usuario" RENAME COLUMN "aplidos" TO "apellidos"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usuario" RENAME COLUMN "apellidos" TO "aplidos"`,
    );
  }
}

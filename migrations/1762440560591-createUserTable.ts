import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1762440560591 implements MigrationInterface {
  name = 'CreateUserTable1762440560591';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "usuario_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying(100) NOT NULL, "aplidos" character varying(100) NOT NULL, "edad" integer NOT NULL, CONSTRAINT "PK_62e71f62ae485377e123dab0c57" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "usuario_entity"`);
  }
}

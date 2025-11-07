import { MigrationInterface, QueryRunner } from 'typeorm';

export class Createusertable1762487073207 implements MigrationInterface {
  name = 'Createusertable1762487073207';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."usuario_rol_enum" AS ENUM('ADMINISTRADOR', 'ESTUDIANTE', 'MAESTRO')`,
    );
    await queryRunner.query(
      `CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying(100) NOT NULL, "aplidos" character varying(100) NOT NULL, "edad" integer NOT NULL, "correo" character varying(100) NOT NULL, "contrasena" character varying(100) NOT NULL, "rol" "public"."usuario_rol_enum" NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "usuario"`);
    await queryRunner.query(`DROP TYPE "public"."usuario_rol_enum"`);
  }
}

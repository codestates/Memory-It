import { MigrationInterface, QueryRunner } from 'typeorm'

export class testmigration1641281371918 implements MigrationInterface {
  name = 'testmigration1641281371918'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `CREATE TABLE \`images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(255) NOT NULL, \`postId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, \`lat\` varchar(255) NOT NULL, \`lng\` varchar(255) NOT NULL, \`marker\` int NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `CREATE TABLE \`post_emotion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`postId\` int NULL, \`emotionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `CREATE TABLE \`emotions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `ALTER TABLE \`images\` ADD CONSTRAINT \`FK_3ccad79db4407727f9c81f84905\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_ae05faaa55c866130abef6e1fee\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE \`post_emotion\` ADD CONSTRAINT \`FK_a6ced8c99bb11fb3cfc8fd3defe\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE \`post_emotion\` ADD CONSTRAINT \`FK_48399b0faaa64d5ce68ccd00804\` FOREIGN KEY (\`emotionId\`) REFERENCES \`emotions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`post_emotion\` DROP FOREIGN KEY \`FK_48399b0faaa64d5ce68ccd00804\``
    )
    await queryRunner.query(
      `ALTER TABLE \`post_emotion\` DROP FOREIGN KEY \`FK_a6ced8c99bb11fb3cfc8fd3defe\``
    )
    await queryRunner.query(
      `ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_ae05faaa55c866130abef6e1fee\``
    )
    await queryRunner.query(
      `ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_3ccad79db4407727f9c81f84905\``
    )
    await queryRunner.query(`DROP TABLE \`emotions\``)
    await queryRunner.query(`DROP TABLE \`post_emotion\``)
    await queryRunner.query(`DROP TABLE \`posts\``)
    await queryRunner.query(`DROP TABLE \`images\``)
    await queryRunner.query(`DROP TABLE \`users\``)
  }
}

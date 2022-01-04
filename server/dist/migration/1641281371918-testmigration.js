"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testmigration1641281371918 = void 0;
class testmigration1641281371918 {
    constructor() {
        this.name = 'testmigration1641281371918';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(255) NOT NULL, \`postId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, \`lat\` varchar(255) NOT NULL, \`lng\` varchar(255) NOT NULL, \`marker\` int NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`post_emotion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`postId\` int NULL, \`emotionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`emotions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_3ccad79db4407727f9c81f84905\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_ae05faaa55c866130abef6e1fee\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`post_emotion\` ADD CONSTRAINT \`FK_a6ced8c99bb11fb3cfc8fd3defe\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`post_emotion\` ADD CONSTRAINT \`FK_48399b0faaa64d5ce68ccd00804\` FOREIGN KEY (\`emotionId\`) REFERENCES \`emotions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`post_emotion\` DROP FOREIGN KEY \`FK_48399b0faaa64d5ce68ccd00804\``);
            yield queryRunner.query(`ALTER TABLE \`post_emotion\` DROP FOREIGN KEY \`FK_a6ced8c99bb11fb3cfc8fd3defe\``);
            yield queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_ae05faaa55c866130abef6e1fee\``);
            yield queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_3ccad79db4407727f9c81f84905\``);
            yield queryRunner.query(`DROP TABLE \`emotions\``);
            yield queryRunner.query(`DROP TABLE \`post_emotion\``);
            yield queryRunner.query(`DROP TABLE \`posts\``);
            yield queryRunner.query(`DROP TABLE \`images\``);
            yield queryRunner.query(`DROP TABLE \`users\``);
        });
    }
}
exports.testmigration1641281371918 = testmigration1641281371918;

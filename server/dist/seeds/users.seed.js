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
const Users_1 = require("../entity/Users");
// export default class CreateUsers implements Seeder {
//   public async run(factory: Factory, connection: Connection): Promise<any> {
//     const userData = [
//       {
//         username: '김식',
//         password: '1',
//         email: 'aa@code.com',
//       },
//       {
//         username: '권식',
//         email: 'bb@code.com',
//         password: '1',
//       },
//       {
//         username: '강홍결',
//         email: 'cc@code.com',
//         password: '1',
//       },
//       {
//         username: '권예림',
//         email: 'dd@code.com',
//         password: '1',
//       },
//       {
//         username: '김민혜',
//         email: 'ee@code.com',
//         password: '1',
//       },
//       {
//         username: '김유래',
//         email: 'ff@code.com',
//         password: '1',
//       },
//       {
//         username: '이아윤',
//         email: 'gg@code.com',
//         password: '1',
//       },
//       {
//         username: '장미국',
//         email: 'hh@code.com',
//         password: '1',
//       },
//       {
//         username: '킴성태',
//         email: 'ii@code.com',
//         password: '1',
//       },
//       {
//         username: '박준식',
//         email: 'jj@code.com',
//         password: '1',
//       },
//       {
//         username: '임진우',
//         email: 'kk@code.com',
//         password: '1',
//       },
//       {
//         username: '김준석',
//         email: 'll@code.com',
//         password: '1',
//       },
//     ]
//     await connection.getRepository(Users).save(userData)
//   }
// }
class CreateinitialUsers {
    run(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .insert()
                .into(Users_1.Users)
                .values([
                {
                    id: 17,
                    username: '김식',
                    password: '1',
                    email: 'aa@code.com',
                },
                {
                    username: '권식',
                    email: 'bb@code.com',
                    password: '1',
                },
                {
                    username: '강홍결',
                    email: 'cc@code.com',
                    password: '1',
                },
                {
                    username: '권예림',
                    email: 'dd@code.com',
                    password: '1',
                },
                {
                    username: '김민혜',
                    email: 'ee@code.com',
                    password: '1',
                },
                {
                    username: '김유래',
                    email: 'ff@code.com',
                    password: '1',
                },
                {
                    username: '이아윤',
                    email: 'gg@code.com',
                    password: '1',
                },
                {
                    username: '장미국',
                    email: 'hh@code.com',
                    password: '1',
                },
                {
                    username: '킴성태',
                    email: 'ii@code.com',
                    password: '1',
                },
                {
                    username: '박준식',
                    email: 'jj@code.com',
                    password: '1',
                },
                {
                    username: '임진우',
                    email: 'kk@code.com',
                    password: '1',
                },
                {
                    username: '김준석',
                    email: 'll@code.com',
                    password: '1',
                },
            ])
                .execute();
        });
    }
}
exports.default = CreateinitialUsers;

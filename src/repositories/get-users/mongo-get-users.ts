import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Test1",
        lastName: "Test2",
        email: "test@emailcom",
        password: "123",
      },
    ];
  }
}

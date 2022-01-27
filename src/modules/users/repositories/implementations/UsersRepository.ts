import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.users.push(user)

    return user;
  }

  findById(user_id: string): User | undefined {
    const user = this.users.find(user => user.id === user_id)
    return user;
  }

  findByEmail(email: string): User | undefined {
    const userEmail = this.users.find(user => user.email === email)
    return userEmail;
  }

  turnAdmin(receivedUser: User): User {
    const user = receivedUser;

    user.admin = true

    return user;
  }

  list(): User[] {
    const allUsers = this.users;
    return allUsers;
  }
}

export { UsersRepository };

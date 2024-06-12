interface User {
  name: string;
  email: string;
}

export class UserAPI {
  private users: User[] = [{ name: "Tony", email: "t1ny@email.com" }];

  getUsers(): User[] {
    return this.users;
  }

  addUser(name: string, email: string): User {
    const user: User = { name, email };
    this.users.push(user);
    return user;
  }
}

interface IUser {
  name: string;
  age: number;
}
interface IWorker {
  company: string;
  position: string;
}

interface IUserAddress extends IUser, IWorker {
  zipcode: string;
  address: string;
}

const user1: IUserAddress = {
  name: "Jack",
  age: 32,
  zipcode: "12345",
  address: "seoul",
  company: "string",
  position: "string",
};

interface ISignupUser {
  name: string;
  age: number;
  gender: string;
  address: string;
}
// interface Iuser {
//   name: ISignupUser["name"];
//   age: ISignupUser["age"];
// }

interface IUser extends Pick<ISignupUser, "name" | "age"> {}
type TUser1 = Pick<ISignupUser, "name" | "age">;
type TUserOmit = Omit<ISignupUser, "gender" | "address">;

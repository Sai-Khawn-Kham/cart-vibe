export type UserType = {
  user: {
    name: string;
    email: string;
    password: string;
  } | null;
  setUser: (user: UserType["user"]) => void;
  logout: () => void;
}
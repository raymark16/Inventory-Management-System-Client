interface user {
  _id: string;
  username: string;
  email: string;
  phone: string;
  userPicture: string;
}
export interface Props {
  auth: boolean | undefined;
  verifyAuth: () => void;
  userInfo: user | Record<string, never>;
}
export interface Children {
  children: React.ReactNode;
}

import { FC } from "react";
import Input from "../components/ui/input.component";

const LoginPage: FC = () => {
  return (
    <div>
      <Input label="username" />
      <Input label="password" type="password" />

      <button>Login</button>
    </div>
  );
};

export default LoginPage;

import { LoginForm } from '../components/LoginForm';
import { useRedirectIfUserExists } from '../hooks';

export const LoginPage = () => {
  useRedirectIfUserExists();

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <LoginForm />
    </div>
  );
};

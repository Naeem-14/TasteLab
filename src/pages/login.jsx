import Quote from "../features/login/Quote";
import LoginDetails from "../features/login/LoginDetails";

export default function Login() {
  return (
    <main className="grid h-screen grid-cols-1 p-4 md:grid-cols-2">
      <Quote />
      <LoginDetails />
    </main>
  );
}

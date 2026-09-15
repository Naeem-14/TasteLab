import { logo } from "../../data/icons";
import LoginForm from "./LoginForm";
import { Link } from "react-router";

export default function LoginDetails() {
  return (
    <section className="flex flex-col items-center justify-between p-6">
      {/* logo */}
      <div className="flex scale-125 items-center gap-1.5">
        <div className="text-accent">{logo}</div>
        <div className="font-sans text-2xl font-bold">
          Taste<span className="text-accent">Lab</span>
        </div>
      </div>

      <LoginForm />

      {/* sign up */}
      <div>
        Don't have an account?{" "}
        <Link
          to="/sign-up"
          className="cursor-pointer font-semibold text-accent transition hover:text-accent/75"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}

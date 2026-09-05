import { logo } from "../../data/icons";
import SignUpForm from "./SignUpForm";

export default function SignUpDetails({ user, setUser, setIsLoggedIn }) {
  return (
    <section className="flex flex-col items-center justify-between p-6">
      {/* logo */}
      <div className="flex scale-125 items-center gap-1.5">
        <div className="text-accent">{logo}</div>
        <div className="font-sans text-2xl font-bold">
          Taste<span className="text-accent">Lab</span>
        </div>
      </div>

      <SignUpForm user={user} setUser={setUser} />

      {/* sign up */}
      <div>
        Already have an account?{" "}
        <span
          className="cursor-pointer font-semibold text-accent transition hover:text-accent/75"
          onClick={() => setIsLoggedIn(true)}
        >
          Log in
        </span>
      </div>
    </section>
  );
}

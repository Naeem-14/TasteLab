import SignUpInputs from "./SignUpInputs";
import SignUpButtons from "./SignUp-buttons";

export default function SignUpForm({ user, setUser }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 flex flex-col items-center gap-1">
        <h2 className="text-center text-4xl font-bold">
          Join our kitchen community
        </h2>
        <p className="text-center text-slate-500">
          Sign up today and start building your custom digital cookbook.
        </p>
      </div>

      <SignUpInputs user={user} setUser={setUser} />

      <SignUpButtons />
    </div>
  );
}

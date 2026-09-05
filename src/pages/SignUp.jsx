import Quote from "../features/login/Quote";
import SignUpDetails from "../features/login/SignUpDetails";
import BackButton from "../components/BackButton";

export default function SignUp({ user, setUser, setIsLoggedIn }) {
  return (
    <main className="grid h-screen grid-cols-1 gap-4 p-4 md:grid-cols-2">
      <BackButton />
      <Quote />
      <SignUpDetails
        user={user}
        setUser={setUser}
        setIsLoggedIn={setIsLoggedIn}
      />
    </main>
  );
}

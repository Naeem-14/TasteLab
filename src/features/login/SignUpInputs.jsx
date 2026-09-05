// SignUpInputs.jsx
import { useState } from "react";
import { userName, email, lock, repeat } from "../../data/icons";

export default function SignUpInputs({ user = {}, setUser }) {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function handlePasswordChange(newPassword, newRepeat) {
    setPassword(newPassword);
    setRepeatPassword(newRepeat);

    if (newPassword && newPassword === newRepeat) {
      setUser((prev) => ({ ...prev, password: newPassword }));
    } else {
      setUser((prev) => ({ ...prev, password: "" }));
    }
  }

  function setEmail(e) {
    const value = e.target.value;
    setUser((prev) => ({ ...prev, email: value }));
  }

  const passwordsMatch = password === repeatPassword;
  const showMismatchError = repeatPassword.length > 0 && !passwordsMatch;

  return (
    <div className="flex flex-col gap-4">
      {/* Username */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="username"
          className="text-sm font-semibold text-slate-700"
        >
          Username
        </label>
        <div className="add-recipe-text-input flex flex-1 items-center gap-3">
          <span className="scale-90 text-slate-500">{userName}</span>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="flex-1"
            value={user?.userName || ""}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, userName: e.target.value }))
            }
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-slate-700">
          Email
        </label>
        <div className="add-recipe-text-input flex flex-1 items-center gap-3">
          <span className="scale-90 text-slate-500">{email}</span>
          <input
            type="text"
            id="email"
            placeholder="Enter your email address"
            className="flex-1"
            value={user?.email || ""}
            onChange={setEmail}
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="password"
          className="text-sm font-semibold text-slate-700"
        >
          Password
        </label>
        <div className="add-recipe-text-input flex flex-1 items-center gap-3">
          <span className="scale-90 text-slate-500">{lock}</span>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="flex-1 focus:outline-none"
            value={password}
            onChange={(e) =>
              handlePasswordChange(e.target.value, repeatPassword)
            }
          />
        </div>
      </div>

      {/* Repeat Password */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="repeat"
          className="text-sm font-semibold text-slate-700"
        >
          Repeat Password
        </label>
        <div className="add-recipe-text-input flex flex-1 items-center gap-3">
          <span className="scale-85 text-slate-500">{repeat}</span>
          <input
            type="password"
            id="repeat"
            placeholder="Repeat your password"
            className="flex-1 focus:outline-none"
            value={repeatPassword}
            onChange={(e) => handlePasswordChange(password, e.target.value)}
          />
        </div>
        {showMismatchError && (
          <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
        )}
      </div>
    </div>
  );
}

import {
  email,
  lock,
  google,
  apple,
  facebook,
  microsoft,
} from "../../data/icons";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 flex flex-col items-center gap-1">
        <h2 className="text-4xl font-bold">Welcome back, Chef!</h2>
        <p className="text-slate-500">
          Your personal cookbook is waiting for you.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-slate-700"
          >
            Email
          </label>
          <div className="add-recipe-text-input flex items-center gap-3">
            <span className="scale-90 text-slate-500">{email}</span>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-slate-700"
          >
            Password
          </label>
          <div className="add-recipe-text-input flex items-center gap-3">
            <span className="scale-90 text-slate-500">{lock}</span>
            <input
              type="password"
              id="password"
              placeholder="Enter your email address"
              className="focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98]">
          Log In
        </button>

        <div className="flex items-center gap-3">
          <div className="h-0.5 flex-1 rounded-full bg-slate-400/50"></div>
          <p className="my-2 text-sm text-slate-500">Or continue with</p>
          <div className="h-0.5 flex-1 rounded-full bg-slate-400/50"></div>
        </div>

        <div className="flex items-center justify-center gap-3">
          {/* Google */}
          <button
            type="button"
            aria-label="Sign in with Google"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#34A853] hover:bg-[#34A853] hover:text-white hover:shadow-md focus:ring-2 focus:ring-[#34A853] focus:ring-offset-2 focus:outline-hidden active:translate-y-0"
          >
            {google}
          </button>

          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0866ff] hover:bg-[#0866ff] hover:text-white hover:shadow-md focus:ring-2 focus:ring-[#0866ff] focus:ring-offset-2 focus:outline-hidden active:translate-y-0"
          >
            {facebook}
          </button>

          {/* Apple */}
          <button
            type="button"
            aria-label="Sign in with Apple"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white hover:shadow-md focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-hidden active:translate-y-0"
          >
            {apple}
          </button>

          {/* Facebook */}

          {/* Microsoft */}
          <button
            type="button"
            aria-label="Sign in with Microsoft"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00a4ef] hover:bg-[#00a4ef] hover:text-white hover:shadow-md focus:ring-2 focus:ring-[#00a4ef] focus:ring-offset-2 focus:outline-hidden active:translate-y-0"
          >
            {microsoft}
          </button>
        </div>
      </div>
    </div>
  );
}

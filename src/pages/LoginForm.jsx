export default function LoginForm() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#EDEDED] p-8">
      <div className="w-[1200px] h-[800px] flex bg-[#FFFFFF] rounded-[32px] overflow-hidden">
        {/* Left side - Image */}
        <div
          className="w-[744px] h-full rounded-l-[32px]"
          style={{
            background: "url(image.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Right side - Form */}
        <div className="w-[456px] h-full flex justify-center items-start px-12 pt-16">
          <div className="w-[360px] flex flex-col">
            {/* Logo section */}
            <div className="flex justify-start items-start pb-[80px]">
              <div>
                <img src="logo.svg" alt="logo placeholder" />
              </div>
            </div>

            {/* Title */}
            <div className="pb-[32px]">
              <p className="text-[#191B1E] text-2xl font-['Inter'] font-bold">
                Nice to see you again
              </p>
            </div>

            {/* Email field */}
            <div className="pb-[24px]">
              <div
                className="w-[360px] h-[56px] flex justify-start items-center flex-row gap-2.5 px-4 rounded-xl"
                style={{
                  background:
                    "linear-gradient(0deg, #ECEEF1 0%, #ECEEF1 100%),linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 100%)",
                }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 text-[#737A86] font-['Inter'] bg-transparent outline-none placeholder:text-[#737A86]"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="pb-4">
              <div className="h-[56px] flex w-[360px] justify-start items-center flex-row gap-3 px-4 bg-[#ECEEF1] rounded-xl">
                <input
                  type="password"
                  placeholder="Password"
                  className="flex-1 text-[#737A86] font-['Inter'] bg-transparent outline-none placeholder:text-[#737A86]"
                />
                <div className="cursor-pointer">
                  <img
                    src="icon-visibility_off.png"
                    alt="icon-visibility_off placeholder"
                  />
                </div>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex w-[360px] justify-end items-start flex-row gap-2.5 pb-[32px]">
              <button className="text-[#007AFF] text-sm font-['Inter'] text-right font-semibold cursor-pointer hover:opacity-80">
                Forgot password?
              </button>
            </div>

            {/* Sign in button */}
            <div className="flex w-[360px] justify-start items-start flex-col gap-2.5 pb-[32px]">
              <button className="h-[52px] flex w-[360px] justify-center items-center flex-row px-4 bg-[#007AFF] rounded-lg cursor-pointer hover:bg-[#0056CC] transition-colors">
                <span className="text-[#FFFFFF] font-['Inter'] text-right font-bold">
                  Sign in
                </span>
              </button>
            </div>

            {/* Create account */}
            <div className="flex w-[360px] justify-center items-center flex-row gap-1">
              <span className="text-[#737A86] text-sm font-['Inter']">
                Don't have an account?
              </span>
              <button className="text-[#007AFF] text-sm font-['Inter'] text-right font-semibold cursor-pointer hover:opacity-80">
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

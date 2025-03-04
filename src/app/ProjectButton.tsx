"use client";

const ButtonWrapper = () => {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <NeumorphismButton />
    </div>
  );
};

const NeumorphismButton = () => {
  return (
    <button onClick={() => window.location.reload()} className="w-[50%] h-[50%]">
        <img src="/official_profile_picture.svg" alt="Globe Logo" className="w-[100%] h-[100%] transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]" />
    </button>
  );
};

export default ButtonWrapper;
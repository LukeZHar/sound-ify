import { UserButton } from "@clerk/clerk-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/" className="rounded-lg">
          <img src="/spotify.png" className="size-10 text-black" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Music Manager</h1>
          <p className="text-zinc-400 mt-1">Manage the music catalog</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link to="/">
          <ArrowLeft className="size-4 md:mr-2" />
          <p className="hidden md:block">Back To Home</p>
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;

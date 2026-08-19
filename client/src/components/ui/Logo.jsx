import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src="/logo.png" alt="Servomates" className="h-10 w-auto sm:h-12" />
    </Link>
  );
}

export default Logo;

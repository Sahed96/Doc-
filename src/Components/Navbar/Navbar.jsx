import logo from "../../assets/logo dark.png";
import arrow from "../../assets/Arrow 1.png";

const Navbar = () => {
  const navList = (
    <>
      <li>Home</li>
      <li>Service</li>
      <li>Blog</li>
      <li>About Us</li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-base text-[#020043] font-normal menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <a className=" text-lg">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-6 text-[#020043] text-base font-normal menu-horizontal px-1">
          {navList}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="rounded-[12px] hover:cursor-pointer text-[#020043] font-medium flex gap-2 items-center px-7 py-3 border-[1px] border-[#343268] bg-transparent">
          Appointment{" "}
          <span>
            <img src={arrow} alt="" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

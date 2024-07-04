import doc from "../../assets/logo_light.png";
import Social from "../../assets/Group 9168.png";

const Footer = () => {
  return (
    <footer className="footer text-white mt-10 lg:mt-[160px] min-h-[442px] bg-[#020043] px-[165px] pt-[120px] ">
      <aside>
        <img src={doc} alt="" />
        <p className="mt-6">
          123 Main Street downtown, USA <br />
          Postal Code: 12345 <br />
          <br />
          Support: support@oyolloo.com <br />
          (Available : 10:00am to 07:00pm)
        </p>
      </aside>
      <nav className="mt-16">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Success Page</a>
        <a className="link link-hover">Terms and condition</a>
      </nav>
      <nav className="mt-16">
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Scheduling</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Patient Portal</a>
      </nav>
      <nav className="mt-16">
        <a className="link link-hover">Follow Us</a>
        <img src={Social} alt="" />
        <a className="link link-hover mt-5">@docplus 2024</a>
      </nav>
    </footer>
  );
};

export default Footer;

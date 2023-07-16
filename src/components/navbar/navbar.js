import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";
export default function Navbar() {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile display={["flex", "flex", "flex", "none"]} />
    </>
  );
}

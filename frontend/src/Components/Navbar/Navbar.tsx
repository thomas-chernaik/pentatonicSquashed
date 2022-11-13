import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import theme from "../../theme/theme";
import SignIn from "../SignIn/SignIn";
import SignOut from "../SignOut/SignOut";
import UnformattedLink from "../util/UnformattedLink";

type NavbarPropsType = {};

const Navbar = ({}: NavbarPropsType) => {
  const { user, getAccessTokenSilently } = useAuth0();
  return (
    <NavbarContainer>
        <UnformattedLink href="/">
            PENTATONIC
        </UnformattedLink>
      {!user ? <SignIn /> : null}
      {user ? <SignOut /> : null}
      {user?.name}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${theme.color.blue};
  color: ${theme.color.creamWhite};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Navbar;

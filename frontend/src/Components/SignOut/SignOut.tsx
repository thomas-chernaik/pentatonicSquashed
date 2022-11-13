import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import theme from "../../theme/theme";

type SignOutProps = {

}

const SignOut = ({}: SignOutProps) => {
    const { logout } = useAuth0();
    return (
        <SignOutButton onClick={() => logout({returnTo: 'http://localhost:3000'})}>
            Sign out
        </SignOutButton>
    )
}

const SignOutButton = styled.button`
    color: ${theme.color.creamWhite}
`

export default SignOut;
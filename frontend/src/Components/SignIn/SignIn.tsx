import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import theme from "../../theme/theme";
import { useState } from "react";

type SignInProps = {

}

const SignIn = ({}: SignInProps) => {
    const { loginWithPopup, user, getAccessTokenSilently } = useAuth0();
    return (
        <SignInButton onClick={() => loginWithPopup()}>
            Sign in
        </SignInButton>
    )
}

const SignInButton = styled.button`
    color: ${theme.color.creamWhite}
`

export default SignIn;
import styled from "styled-components";

const UnformattedLink = styled.a`
    cursor: pointer;
    :link{
        color: white;
        text-decoration: none;
    }
    :visited{
        color: white;
        text-decoration: none;
    }
    :hover{
        color: #cfc9c9;
        text-decoration: none;
    }
    :active{
        color: white;
        text-decoration: none;
    }
`;

export default UnformattedLink;
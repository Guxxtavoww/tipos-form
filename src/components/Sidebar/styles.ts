import styled from "styled-components";

export const SidebarBox = styled.aside`
    position: sticky;
    top: 80px;
    left: 0px;
    padding: 1rem;
    height: calc(100vh - 80px);
    max-width: 15rem;
    width: 100%;
    background-color: #0d0d0d;
    color: #fff;
    transition: .5s;
    @media screen and (max-width: 991px) {
        max-width: 10rem;
    }
`;
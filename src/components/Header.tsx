import styled from 'styled-components';
import { LOGO_TEXT, COLORS, MAX_CONTENT_WIDTH } from '../constants/ui';

const HeaderContainer = styled.header`
    background-color: ${COLORS.PRIMARY};
    padding: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
    background-color: ${COLORS.PRIMARY};
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const LogoText = styled.h1`
    color: white;
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
    font-family: 'Arial', sans-serif;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

const Nav = styled.nav`
    background-color: ${COLORS.BACKGROUND};
    border-bottom: 1px solid ${COLORS.BORDER};
`;

const NavContent = styled.div`
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;
    padding: 0 20px;
`;

function Header() {
    return (
        <HeaderContainer>
            <TopBar>
                <Logo>
                    <LogoText>{LOGO_TEXT}</LogoText>
                </Logo>
            </TopBar>
            <Nav>
                <NavContent>
                </NavContent>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;
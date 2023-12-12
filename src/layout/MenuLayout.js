import styled, { css } from "styled-components";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Logo from "../logo.svg";

import HomeIcon from "../asset/img/home.svg";
import ShortIcon from "../asset/img/shorts.svg";
import SubscribeIcon from "../asset/img/subscribe.svg";
import ProfileIcon from "../asset/img/profile.svg";
import MoreIcon from "../asset/img/more.svg";

const WholeContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const LogoImg = styled.img`
    width: 112px;
    aspect-ratio: 3 / 1;

    margin-top: 24px;
    margin-left: 12px;
`;

const MenuLayoutContainer = styled.div`
    width: 240px;
    height: 100%;

    padding: 28px 20px;

    position: relative;

    display: flex;
    flex-direction: column;

    background-color: #f5f8fb;
`;

const MenuLayoutTopContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-top: 48px;
`;

const LayoutSpace = styled.div`
    flex: 1;

    position: relative;
`;

const MenuLayoutBottomContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const MenuLayoutItem = styled.div`
    border-radius: 8px;

    padding: 12px;

    display: flex;
    flex-direction: row;
    gap: 20px;

    align-items: center;

    background-color: ${(props) => props.backgroundColor};

    cursor: pointer;

    &:hover {
        background-color: #DEE8F180;
    }
`;

const MenuLayoutItemImg = styled.img`
    width: 28px;
    height: 28px;
`;

const MenuLayoutItemText = styled.div`
    font-family: 'Pretendard Medium';
    font-size: 16px;
    color: #5B5B5B;
`;

function MenuLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <WholeContainer>
            <MenuLayoutContainer>
                <LogoImg src={Logo} />
                <MenuLayoutTopContainer>
                <MenuLayoutItem
                    onClick={() => {
                        navigate("/");
                    }}
                    backgroundColor={pathname === "/" ? "#DEE8F1" : "transparent"}
                >
                    <MenuLayoutItemImg src={HomeIcon} />
                    <MenuLayoutItemText>홈</MenuLayoutItemText>
                </MenuLayoutItem>

                <MenuLayoutItem
                    onClick={() => {
                        navigate("/shorts");
                    }}
                    backgroundColor={pathname === "/shorts" ? "#DEE8F1" : "transparent"}
                >
                    <MenuLayoutItemImg src={ShortIcon} />
                    <MenuLayoutItemText>Shorts</MenuLayoutItemText>
                </MenuLayoutItem>

                <MenuLayoutItem
                    onClick={() => {
                        navigate("/subscribe");
                    }}
                    backgroundColor={pathname === "/subscribe" ? "#DEE8F1" : "transparent"}
                >
                    <MenuLayoutItemImg src={SubscribeIcon} />
                    <MenuLayoutItemText>구독</MenuLayoutItemText>
                </MenuLayoutItem>
                </MenuLayoutTopContainer>

                <LayoutSpace />

                <MenuLayoutBottomContainer>
                <MenuLayoutItem
                    onClick={() => {
                        navigate("/profile");
                    }}
                    backgroundColor={pathname === "/profile" ? "#DEE8F1" : "transparent"}
                >
                    <MenuLayoutItemImg src={ProfileIcon} />
                    <MenuLayoutItemText>내 정보</MenuLayoutItemText>
                </MenuLayoutItem>

                <MenuLayoutItem
                    onClick={() => {
                        // popup
                    }}
                >
                    <MenuLayoutItemImg src={MoreIcon} />
                    <MenuLayoutItemText>더보기</MenuLayoutItemText>
                </MenuLayoutItem>
                </MenuLayoutBottomContainer>
            </MenuLayoutContainer>
            <LayoutSpace>
                <Outlet />
            </LayoutSpace>
        </WholeContainer>
    );
};

export default MenuLayout;

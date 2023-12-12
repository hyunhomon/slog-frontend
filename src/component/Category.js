import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";

import dropUpIcon from "../asset/img/dropUp.svg";
import dropDownIcon from "../asset/img/dropDown.svg";

const categoryList = [
    "whole",
    "design",
    "programming",
    "science",
    "math",
    "language",
    "self-improvement",
    "politics",
    "sports",
    "economy",
    "religion",
    "game",
    "art",
    "music",
    "health"
];

const CategoryContainer = styled.div`
    width: 100%;

    padding-bottom: 12px;

    display: flex;
    flex-direction: row;
    gap: 8px;

    position: relative;
    top: 0;

    z-index: 100;

    overflow-x: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CategoryItemWholeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const CategoryDropItemContainer = styled.div`
    padding: 8px;
    border-radius: 4px;

    position: fixed;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 4px;

    background-color: ${(props) => props.backgroundColor};

    transform: translate(0px, 32px);
`;

const CategoryDropItemText = styled.div`
    width: 100%;

    padding: 4px 8px;
    border-radius: 2px;

    font-family: 'Pretendard Regular';
    font-size: 16px;
    color: #5B5B5B;

    &:hover {
        background-color: #B9CDE180;
    }

    cursor: pointer;
`;

const CategoryItemContainer = styled.div`
    width: fit-content;
    height: fit-content;

    padding: 4px 12px;

    border-radius: 4px;

    display: flex;
    flex-direction: row;
    gap: 4px;

    justify-content: center;

    background-color: ${(props) => props.backgroundColor};

    &:hover {
        background-color: #DEE8F180;
    }

    cursor: pointer;
`;

const CategoryItemText = styled.div`
    font-family: 'Pretendard Medium';
    font-size: 16px;
    color: #5B5B5B;
`;

const CategoryItemImg = styled.img`
    width: 20px;
    height: 20px;

    &:hover {
        transform: translate(0px, 2px);
    }
`;

function Category() {
    const [render, setRender] = useState(false);
    const selectCategory = useRef(categoryList[0]);

    const CategoryItem = (props) => {
        const [open, setOpen] = useState(false);
    
        const categoryClose = (e) => {
            if(e.keyCode === 27) {
                setOpen(false);
            }
        }
    
        useEffect(() => {
            window.addEventListener("keydown", categoryClose);
            return () => window.removeEventListener("keydown", categoryClose);
        }, [])
    
        return (
            <CategoryItemWholeContainer
                onMouseOver={() => setOpen(open)}
                onMouseOut={() => setOpen(false)}
            >
                <CategoryItemContainer
                    onClick={() => {
                        // query
                        selectCategory.current = categoryList[props.num];
                        setRender(!render);
                    }}
                    backgroundColor={selectCategory.current === categoryList[props.num] ? "#DEE8F1" : "#F5F8FB"}
                >
                    <CategoryItemText>{props.name}</CategoryItemText>
                    <CategoryItemImg src={open ? dropDownIcon : dropUpIcon}
                        onClick={(event) => {
                            event.stopPropagation();
                            setOpen(!open);
                        }}
                    />
                </CategoryItemContainer>
                {open && props.children}
            </CategoryItemWholeContainer>
        );
    };
    
    const CategoryDropItem = (props) => {
        return (
            <CategoryDropItemContainer
                    backgroundColor={selectCategory.current === categoryList[1] ? "#DEE8F1" : "#F5F8FB"}
                >
                    {props.item.map((e, i) => {
                        return (
                            <CategoryDropItemText
                                key={i}
                            >{e}</CategoryDropItemText>
                        );
                    })}
            </CategoryDropItemContainer>
        );
    };

    return (
        <CategoryContainer>
            <CategoryItemContainer
                onClick={() => {
                    // query
                    selectCategory.current = categoryList[0];
                    setRender(!render);
                }}
                backgroundColor={selectCategory.current === categoryList[0] ? "#DEE8F1" : "#F5F8FB"}
            >
                <CategoryItemText>전체</CategoryItemText>
            </CategoryItemContainer>
            <CategoryItem
                name="디자인"
                num="1"
            >
                <CategoryDropItem
                    item={["UI/UX", "모션그래픽", "타이포그래피", "브랜딩"]}
                />
            </CategoryItem>
            <CategoryItem
                name="프로그래밍"
                num="2"
            >
                <CategoryDropItem
                    item={["App", "Web", "Game", "Dev/Ops", "low-level", "AI/ML", "Network"]}
                />
            </CategoryItem>
            <CategoryItem
                name="과학"
                num="3"
            >
                <CategoryDropItem
                    item={["물리학", "화학", "지질학", "생명공학", "지리학", "천문학", "자연과학"]}
                />
            </CategoryItem>
            <CategoryItem
                name="수학"
                num="4"
            >
                <CategoryDropItem
                    item={["수론", "대수학", "해석학", "기하학", "위상수학", "수학기초론", "이산수학", "확률과 통계"]}
                />
            </CategoryItem>
            <CategoryItem
                name="언어"
                num="5"
            >
                <CategoryDropItem
                    item={["한국어", "영어", "일본어", "중국어", "독일어", "프랑스어", "힌두어"]}
                />
            </CategoryItem>
            <CategoryItem
                name="자기계발"
                num="6"
            >
                <CategoryDropItem
                    item={["마인드셋", "동기부여", "데일리 루틴", "생산성 향상"]}
                />
            </CategoryItem>
            <CategoryItem
                name="철학"
                num="7"
            >
                <CategoryDropItem
                    item={["법학", "윤리학", "정치학", "심리학", "논리학"]}
                />
            </CategoryItem>
            <CategoryItem
                name="스포츠"
                num="8"
            >
                <CategoryDropItem
                    item={["축구", "농구", "야구", "테니스", "배구", "사이클링", "수영", "클라이밍"]}
                />
            </CategoryItem>
            <CategoryItem
                name="경제"
                num="9"
            >
                <CategoryDropItem
                    item={["주식", "예금/적금", "경영", "세금"]}
                />
            </CategoryItem>
            <CategoryItem
                name="종교"
                num="10"
            >
                <CategoryDropItem
                    item={["기독교", "이슬람교", "힌두교", "불교", "유대교"]}
                />
            </CategoryItem>
            <CategoryItem
                name="게임"
                num="11"
            >
                <CategoryDropItem
                    item={["RPG", "FPS", "캐주얼", "시뮬레이션", "대전 액션"]}
                />
            </CategoryItem>
            <CategoryItem
                name="예술"
                num="12"
            >
                <CategoryDropItem
                    item={["2차원", "3차원", "연극", "미디어"]}
                />
            </CategoryItem>
            <CategoryItem
                name="음악"
                num="13"
            >
                <CategoryDropItem
                    item={["가요", "랩/힙합", "재즈", "클래식", "락/메탈", "일렉트로닉", "R&B"]}
                />
            </CategoryItem>
            <CategoryItem
                name="건강"
                num="14"
            >
                <CategoryDropItem
                    item={["생활", "정신", "질병", "약물"]}
                />
            </CategoryItem>
        </CategoryContainer>
    );
};

export default Category;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostContainer = styled.div`
    width: 100%;
    flex: 1;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 20px 24px;

    overflow: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const PostItemContainer = styled.div`
    aspect-ratio: 16 / 9;

    border-radius: 4px;

    display: flex;
    flex-wrap: nowrap;

    position: relative;

    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-clip: border-box;
    transition: background-size.3s ease;

    &:hover {
        background-size: 120%;
    }
`;

const PostItemText = styled.div`
    width: 100%;
    height: fit-content;

    padding: 12px;
    border-radius: 0px 0px 5px 5px;

    position: absolute;
    bottom: 0;

    font-family: 'Pretendard Regular';
    font-size: 16px;
    color: #FBFBFB;

    background-color: #1D1D1DCC;

    cursor: pointer;
`;

const PostItemHideText = styled.div`
    width: 100%;
    height: fit-content;

    padding-top: 12px;

    font-family: 'Pretendard Regular';
    font-size: 12px;
    color: #FBFBFB;
`;

function Post(props) {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <PostContainer>
            {props.list.map((e, i) => {
                const itemOpen = (openIndex === i);

                return (
                    <PostItemContainer
                        key={i}
                        backgroundImage={e.thumbnail}

                        onClick={() => {
                            // data intent
                            navigate("/shorts");
                        }}
                    >
                        <PostItemText
                            onMouseOver={() => setOpenIndex(i)}
                            onMouseOut={() => setOpenIndex(null)}
                        >
                            {e.title}
                            {itemOpen &&
                                <PostItemHideText>
                                    조회수: {e.views}<br/>
                                    좋아요: {e.likes}<br/>
                                    싫어요: {e.dislikes}<br/>
                                </PostItemHideText>
                            }
                        </PostItemText>
                    </PostItemContainer>
                );
            })}
        </PostContainer>
    );
};

export default Post;

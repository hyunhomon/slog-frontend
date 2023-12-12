import styled, { css } from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import Category from "../component/Category";
import Post from "../component/Post";

const WholeContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 36px 24px 0px 24px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    position: absolute;
    right: 0;
`;

function HomePage() {
    const [render, setRender] = useState(false);
    const [post, setPost] = useState(mockPostList);

    const postGet = (url) => {
        axios.get(url)
        .then((response) => {
            setPost(prevList => [...prevList, response.data]);
            console.log("Post Data Load Success");
        })
        .catch((error) => {
            console.log("Post Data Load Fail");
        })
    }

    useEffect(() => {
        postGet("/api/post");
    }, []);

    return (
        <WholeContainer>
            <Category />
            <Post list={post} />
        </WholeContainer>
    );
};

export default HomePage;

const mockPostList = [
    {
        title: "도파민 중독인 당신에게",
        thumbnail: "res/1.png",
        views: "2000",
        likes: "400",
        dislikes: "2"
    },
    {
        title: "찬물 샤워의 효능",
        thumbnail: "res/2.png",
        views: "100",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "아침을 상쾌하게 시작하는 10가지 모닝루틴",
        thumbnail: "res/3.png",
        views: "10500",
        likes: "5300",
        dislikes: "0"
    },
    {
        title: "쾌락을 포기하고 고통을 쫓아라",
        thumbnail: "res/4.png",
        views: "14000",
        likes: "2100",
        dislikes: "15"
    },
    {
        title: "생산성을 위한 데일리 루틴",
        thumbnail: "res/5.png",
        views: "300",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "성취감을 느낄 수 있는 5가지 신선한 경험",
        thumbnail: "res/6.png",
        views: "10000",
        likes: "100",
        dislikes: "10"
    },
    {
        title: "우울증과 무기력증에 대한 고찰",
        thumbnail: "res/7.png",
        views: "20",
        likes: "0",
        dislikes: "0"
    },
    {
        title: "하루를 마무리짓는 루틴",
        thumbnail: "res/8.png",
        views: "1000",
        likes: "100",
        dislikes: "0"
    },
    {
        title: "도파민 중독인 당신에게",
        thumbnail: "res/1.png",
        views: "2000",
        likes: "400",
        dislikes: "2"
    },
    {
        title: "찬물 샤워의 효능",
        thumbnail: "res/2.png",
        views: "100",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "아침을 상쾌하게 시작하는 10가지 모닝루틴",
        thumbnail: "res/3.png",
        views: "10500",
        likes: "5300",
        dislikes: "0"
    },
    {
        title: "쾌락을 포기하고 고통을 쫓아라",
        thumbnail: "res/4.png",
        views: "14000",
        likes: "2100",
        dislikes: "15"
    },
    {
        title: "생산성을 위한 데일리 루틴",
        thumbnail: "res/5.png",
        views: "300",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "성취감을 느낄 수 있는 5가지 신선한 경험",
        thumbnail: "res/6.png",
        views: "10000",
        likes: "100",
        dislikes: "10"
    },
    {
        title: "우울증과 무기력증에 대한 고찰",
        thumbnail: "res/7.png",
        views: "20",
        likes: "0",
        dislikes: "0"
    },
    {
        title: "하루를 마무리짓는 루틴",
        thumbnail: "res/8.png",
        views: "1000",
        likes: "100",
        dislikes: "0"
    },
    {
        title: "도파민 중독인 당신에게",
        thumbnail: "res/1.png",
        views: "2000",
        likes: "400",
        dislikes: "2"
    },
    {
        title: "찬물 샤워의 효능",
        thumbnail: "res/2.png",
        views: "100",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "아침을 상쾌하게 시작하는 10가지 모닝루틴",
        thumbnail: "res/3.png",
        views: "10500",
        likes: "5300",
        dislikes: "0"
    },
    {
        title: "쾌락을 포기하고 고통을 쫓아라",
        thumbnail: "res/4.png",
        views: "14000",
        likes: "2100",
        dislikes: "15"
    },
    {
        title: "생산성을 위한 데일리 루틴",
        thumbnail: "res/5.png",
        views: "300",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "성취감을 느낄 수 있는 5가지 신선한 경험",
        thumbnail: "res/6.png",
        views: "10000",
        likes: "100",
        dislikes: "10"
    },
    {
        title: "우울증과 무기력증에 대한 고찰",
        thumbnail: "res/7.png",
        views: "20",
        likes: "0",
        dislikes: "0"
    },
    {
        title: "하루를 마무리짓는 루틴",
        thumbnail: "res/8.png",
        views: "1000",
        likes: "100",
        dislikes: "0"
    },
    {
        title: "도파민 중독인 당신에게",
        thumbnail: "res/1.png",
        views: "2000",
        likes: "400",
        dislikes: "2"
    },
    {
        title: "찬물 샤워의 효능",
        thumbnail: "res/2.png",
        views: "100",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "아침을 상쾌하게 시작하는 10가지 모닝루틴",
        thumbnail: "res/3.png",
        views: "10500",
        likes: "5300",
        dislikes: "0"
    },
    {
        title: "쾌락을 포기하고 고통을 쫓아라",
        thumbnail: "res/4.png",
        views: "14000",
        likes: "2100",
        dislikes: "15"
    },
    {
        title: "생산성을 위한 데일리 루틴",
        thumbnail: "res/5.png",
        views: "300",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "성취감을 느낄 수 있는 5가지 신선한 경험",
        thumbnail: "res/6.png",
        views: "10000",
        likes: "100",
        dislikes: "10"
    },
    {
        title: "우울증과 무기력증에 대한 고찰",
        thumbnail: "res/7.png",
        views: "20",
        likes: "0",
        dislikes: "0"
    },
    {
        title: "하루를 마무리짓는 루틴",
        thumbnail: "res/8.png",
        views: "1000",
        likes: "100",
        dislikes: "0"
    },
    {
        title: "도파민 중독인 당신에게",
        thumbnail: "res/1.png",
        views: "2000",
        likes: "400",
        dislikes: "2"
    },
    {
        title: "찬물 샤워의 효능",
        thumbnail: "res/2.png",
        views: "100",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "아침을 상쾌하게 시작하는 10가지 모닝루틴",
        thumbnail: "res/3.png",
        views: "10500",
        likes: "5300",
        dislikes: "0"
    },
    {
        title: "쾌락을 포기하고 고통을 쫓아라",
        thumbnail: "res/4.png",
        views: "14000",
        likes: "2100",
        dislikes: "15"
    },
    {
        title: "생산성을 위한 데일리 루틴",
        thumbnail: "res/5.png",
        views: "300",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "성취감을 느낄 수 있는 5가지 신선한 경험",
        thumbnail: "res/6.png",
        views: "10000",
        likes: "100",
        dislikes: "10"
    },
    {
        title: "우울증과 무기력증에 대한 고찰",
        thumbnail: "res/7.png",
        views: "20",
        likes: "0",
        dislikes: "0"
    },
    {
        title: "하루를 마무리짓는 루틴",
        thumbnail: "res/8.png",
        views: "1000",
        likes: "100",
        dislikes: "0"
    },
    {
        title: "도파민 중독인 당신에게",
        thumbnail: "res/1.png",
        views: "2000",
        likes: "400",
        dislikes: "2"
    },
    {
        title: "찬물 샤워의 효능",
        thumbnail: "res/2.png",
        views: "100",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "아침을 상쾌하게 시작하는 10가지 모닝루틴",
        thumbnail: "res/3.png",
        views: "10500",
        likes: "5300",
        dislikes: "0"
    },
    {
        title: "쾌락을 포기하고 고통을 쫓아라",
        thumbnail: "res/4.png",
        views: "14000",
        likes: "2100",
        dislikes: "15"
    },
    {
        title: "생산성을 위한 데일리 루틴",
        thumbnail: "res/5.png",
        views: "300",
        likes: "20",
        dislikes: "10"
    },
    {
        title: "성취감을 느낄 수 있는 5가지 신선한 경험",
        thumbnail: "res/6.png",
        views: "10000",
        likes: "100",
        dislikes: "10"
    },
    {
        title: "우울증과 무기력증에 대한 고찰",
        thumbnail: "res/7.png",
        views: "20",
        likes: "0",
        dislikes: "0"
    },
    {
        title: "하루를 마무리짓는 루틴",
        thumbnail: "res/8.png",
        views: "1000",
        likes: "100",
        dislikes: "0"
    }
];

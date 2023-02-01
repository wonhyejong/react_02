import React from 'react';
import styled ,{ keyframes } from "styled-components";

const Style = () => {
    return (
        <div>
            <Box>
                <Title fontSize="2rem" color="#d39">스타일드 컴포넌트</Title>
                <Title fontSize="1.5rem" color="#39630f">CSS IN JS</Title>
                <Title color="#ee7124">styled components</Title>
                <Btn borderColor="#03f">normal</Btn>
                <Btn borderColor="#ddd">disabled</Btn>
                <Btn borderColor="#f30">active</Btn>
                <Text size="20px" color="#f99129">2023년2월1일</Text>
                <Text size="16px" color="#7d7010">수요일</Text>
                <Text size="24px" color="#5363df">오후3시</Text>
            </Box>
            <Box>
                 <AniBtn>애니메이션 버튼</AniBtn> 
            </Box>
        </div>
    );
};

export default Style;

const Box = styled.div`
    width:500px;
    border:5px solid red;
    margin: 3rem auto;
    text-align: center;
`
// props 사용 
const Title = styled.h2`
    font-size:${(props)=>props.fontSize};
    color:${(props)=>props.color};
    margin: 1rem 0;
`
const Text = styled.p`
    margin:10px 0;
    font-size:${(props) => props.size};
    color:${(props) => props.color};
`
const Btn = styled.button`
    width:80px;
    height:40px;
    border-radius: 3px;
    margin:10px;  
    border : 1px solid ${(props)=>props.borderColor} ; 
    color:${(props)=>props.borderColor};
`
const colorChange = keyframes`
    0%{background-color: red;border-radius:3px}
    100%{ background-color: yellow;border-radius:20px}
`
//확장(상속)
const AniBtn =styled(Btn)`
    width:400px;
    animation: ${colorChange} 1.5s alternate infinite 
`
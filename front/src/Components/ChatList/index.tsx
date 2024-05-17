import React from "react";

import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

const S_Wrapper = styled.div`
	border: 1px solid black;
`;

const S_Top = styled.div`
	border: 1px solid orange;

	display: flex;
	align-items: center;

	/* padding: 8px; */
	height: 45px;
	padding: 0 8px;
	& > a {
		font-size: 20px;
	}
	& > span {
		margin-left: 15px;
	}
`;

const S_Middle = styled.div`
	border: 1px solid red;
`;

function ChatList() {
	return (
		<S_Wrapper>
			<S_Top>
				<Link to={"#none"}>
					<FaArrowLeft />
				</Link>
				<span>유저이름</span>
			</S_Top>
			<S_Middle></S_Middle>
		</S_Wrapper>
	);
}

export default ChatList;

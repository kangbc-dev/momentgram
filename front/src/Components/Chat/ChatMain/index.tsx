import React from "react";

import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ChatItem from "./ChatItem";

const S_Wrapper = styled.div`
	border: 1px solid black;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
`;

const S_Top = styled.div`
	/* border: 1px solid #a4f4ff; */

	display: flex;
	align-items: center;

	/* padding: 8px; */
	width: 100%;
	height: 45px;
	padding: 0 8px;
	& > a {
		font-size: 20px;
	}
	& > span {
		margin-left: 15px;
	}
`;

const S_ChatList = styled.div``;
const S_Middle = styled.div`
	& > h1 {
		margin: 10px 0;
		font-size: 18px;
	}
	& > ${S_ChatList} {
		/* border: 1px solid #ffd8f5; */

		display: flex;
		flex-direction: column;
		gap: 15px;

		width: 300px;
	}
`;

function ChatMain() {
	return (
		<S_Wrapper>
			<S_Top>
				<Link to={"/"}>
					<FaArrowLeft />
				</Link>{" "}
				{/* api */}
				<span>유저이름</span> {/* api */}
			</S_Top>
			<S_Middle>
				<h1>메세지</h1>
				<S_ChatList>
					{Array(10)
						.fill(0)
						.map((item, index) => {
							return (
								<>
									<ChatItem index={index} />
								</>
							);
						})}
				</S_ChatList>
			</S_Middle>
		</S_Wrapper>
	);
}

export default ChatMain;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const S_Container = styled(Link)`
	/* border: 1px solid black; */

	display: flex;
	gap: 10px;

	width: 100%;
`;

const S_ProfileImg = styled.div`
	width: 50px;
	height: 50px;

	border-radius: 50%;
	overflow: hidden;
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin: 0.5;
	}
`;

const S_Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	& > span {
		font-size: 14px;
		&:nth-of-type(2) {
			color: gray;
		}
	}
`;

function ChatItem(props: { index: number }) {
	return (
		<S_Container to={`room/${props.index}`}>
			<S_ProfileImg>
				<img
					src="https://i.namu.wiki/i/hq6niPhkN8EhXuIkCNx32AN614AxXcaxKQ1EnyFaHN41caJM7rPfkfppaGZNlpgmXWPbkD_MGTbmGE4_BOrIBg.webp"
					alt="더미이미지(치이카와)"
				/>
			</S_ProfileImg>
			<S_Info>
				<span>유저이름</span>
				<span>최근 활동: 1시간</span>
			</S_Info>
		</S_Container>
	);
}

export default ChatItem;

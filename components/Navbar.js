import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import useWindowDimensions from "../utils/getWindowDimension";
import DrawerExample from "./Drawer";
import { Flex, ListItem, Spacer, UnorderedList, Box } from "@chakra-ui/react";

const StyledNavbar = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1.5rem 2rem;
`;

const Menu = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-evenly;
`;

const MenuItem = styled.li`
	margin-right: 3rem;
`;

const Navbar = () => {
	const { height, width } = useWindowDimensions();
	console.log(height, width);
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			bgColor="none"
			pt={5}
			mx="auto"
			zIndex={100}
			position="absolute"
			top={0}
			left={0}
		>
			<Image
				src="/PELogo.png"
				alt="Project Empower Logo"
				height={100}
				width={100}
			/>

			{width > 1000 ? (
				<div>
					<UnorderedList
						listStyleType="none"
						display="flex"
						justifyContent="space-evenly"
					>
						<ListItem mx={4}>
							<Link href="/">Home</Link>
						</ListItem>
						<ListItem mx={4}>
							<Link href="/about">About</Link>
						</ListItem>
						<ListItem mx={4}>
							<Link href="/about">Meet the Team</Link>
						</ListItem>
						<ListItem mx={4}>
							<Link href="/about">Contact Us</Link>
						</ListItem>
					</UnorderedList>
				</div>
			) : (
				<DrawerExample />
			)}
		</Flex>
	);
};

export default Navbar;

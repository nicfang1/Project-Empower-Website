import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import useWindowDimensions from "../utils/getWindowDimension";
import DrawerExample from "./Drawer";

const StyledNavbar = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
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
		<StyledNavbar>
			<Link href="/">Project Empower</Link>
			{width > 1000 ? (
				<Menu>
					<MenuItem>
						<Link href="/about">About</Link>
					</MenuItem>
					<MenuItem>
						<Link href="/about">Meet the Team</Link>
					</MenuItem>
					<MenuItem>
						<Link href="/about">Contact Us</Link>
					</MenuItem>
				</Menu>
			) : (
				<DrawerExample />
			)}
		</StyledNavbar>
	);
};

export default Navbar;

import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Input,
	useDisclosure,
	Box,
} from "@chakra-ui/react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const DrawerExample = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<Box>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				<GiHamburgerMenu />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent h="100vh">
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						<Input placeholder="Type here..." />
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default DrawerExample;

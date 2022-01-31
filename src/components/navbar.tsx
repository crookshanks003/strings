import React, { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	HStack,
	IconButton,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import {AiFillControl} from "react-icons/ai";

const NavLink = ({ children, href, active }: { children: ReactNode; href: string, active: boolean}) => (
	<Link
		as={ReactRouterLink}
		to={href}
		px={2}
		py={1}
		fontWeight="medium"
		fontSize="lg"
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			color: "gray.700",
		}}
		_active={{
			color: "green.700",
		}}
		color={active ? "gray.700" : "gray.500"}
	>
		{children}
	</Link>
);

const Navbar = ({ loggedIn }: { loggedIn: boolean }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	let links = loggedIn ? [{ name: "Home", href: "/home" }] : [{ name: "Login", href: "/login" }, {name: "About", href: "/about"}];

	const location = useLocation();

	return (
		<Box bg="white" borderBottom="2px" borderColor="gray.200">
			<Flex h="8vh" alignItems={"center"} justifyContent={"space-between"} width="80%" mx="auto">
				<IconButton
					colorScheme="gray"
					size={"sm"}
					icon={isOpen ? <MdOutlineClose /> : <MdMenu />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={"center"}>
					<Text color="gray.700" fontSize="3xl" fontWeight="semibold">
					<Link href="/">Strings</Link>
					</Text>
				</HStack>
				<Flex alignItems={"center"}>
					<HStack as={"nav"} spacing={3} display={{ base: "none", md: "flex" }}>
						{links.map((link) => (
							<NavLink key={link.name} href={link.href} active={link.href == location.pathname}>
								{link.name}
							</NavLink>
						))}
					</HStack>
					{loggedIn && (
						<Menu>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
								background="gray.700"
								minW={0}
								ms={2}
							>
								<Avatar
									size="sm"
									name="Pritesh"
									background="gray.700"
									color="white"
								/>
							</MenuButton>
							<MenuList>
								<MenuItem>Profile</MenuItem>
								<MenuItem>Dashboard</MenuItem>
								<MenuDivider />
								<MenuItem>Log out</MenuItem>
							</MenuList>
						</Menu>
					)}
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={3}>
						{links.map((link) => (
							<NavLink key={link.name} href={link.href} active={link.href == location.pathname}>
								{link.name}
							</NavLink>
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
};

export default Navbar;

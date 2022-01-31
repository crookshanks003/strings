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
} from "@chakra-ui/react";
import {Link as ReactRouterLink } from "react-router-dom";
import { MdOutlineClose, MdMenu } from "react-icons/md";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
		<Link
			as={ReactRouterLink}
			to={href}
			px={2}
			py={1}
			fontWeight="medium"
			rounded={"md"}
			_hover={{
				textDecoration: "none",
				color: "gray.700",
			}}
			_active={{
				color: "green.700",
			}}
			color="gray.500">
			{children}
		</Link>
);

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	let links: { name: string; href: string }[] = [];

		links = [
			{ name: "Login", href: "/login" },
			{ name: "Home", href: "/home" },
		];

	return (
		<Box bg="white" px={8} borderBottom="2px" borderColor="white">
			<Flex h="8vh" alignItems={"center"} justifyContent={"space-between"}>
				<IconButton
					colorScheme="gray"
					size={"sm"}
					icon={isOpen ? <MdOutlineClose /> : <MdMenu />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={"center"}>
					<Box color="gray.700" fontSize="2xl" fontWeight="semibold">
						<Link href="/">
							Strings
						</Link>
					</Box>
				</HStack>
				<Flex alignItems={"center"}>
					<HStack
						mx={5}
						as={"nav"}
						spacing={2}
						display={{ base: "none", md: "flex" }}>
						{links.map((link) => (
							<NavLink key={link.name} href={link.href}>
								{link.name}
							</NavLink>
						))}
					</HStack>
						<Menu>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
								background="gray.700"
								minW={0}>
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
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={3}>
						{links.map((link) => (
							<NavLink key={link.name} href={link.href}>
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

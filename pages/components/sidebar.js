import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ data }) {
	const theme = useTheme();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						ABC Learning
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<h3
						style={{
							marginRight: "auto",
							marginLeft: "15px",
							marginTop: "auto",
							marginBottom: "auto",
						}}
					>
						Logo
					</h3>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItem>
						<h3> Javascript Tutorial </h3>
					</ListItem>
					{data.map((e) => {
						return (
							<>
								<ListItem>
									<h5> {e.headerData.title}</h5>
								</ListItem>
								{e.headerData.DATAS.map((a, i) => (
									<ListItem button key={i}>
										<ListItemText primary={a} />
									</ListItem>
								))}
							</>
						);
					})}
				</List>
				<Divider />
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<Typography paragraph>
					Paragraphs are the building blocks of papers. Many students define
					paragraphs in terms of length: a paragraph is a group of at least five
					sentences, a paragraph is half a page long, etc. In reality, though,
					the unity and coherence of ideas among sentences is what constitutes a
					paragraph. A paragraph is defined as “a group of sentences or a single
					sentence that forms a unit” (Lunsford and Connors 116). Length and
					appearance do not determine whether a section in a paper is a
					paragraph. For instance, in some styles of writing, particularly
					journalistic styles, a paragraph can be just one sentence long.
					Ultimately, a paragraph is a sentence or group of sentences that
					support one main idea. In this handout, we will refer to this as the
					“controlling idea,” because it controls what happens in the rest of
					the paragraph.
				</Typography>
				<Typography paragraph>
					Paragraphs are the building blocks of papers. Many students define
					paragraphs in terms of length: a paragraph is a group of at least five
					sentences, a paragraph is half a page long, etc. In reality, though,
					the unity and coherence of ideas among sentences is what constitutes a
					paragraph. A paragraph is defined as “a group of sentences or a single
					sentence that forms a unit” (Lunsford and Connors 116). Length and
					appearance do not determine whether a section in a paper is a
					paragraph. For instance, in some styles of writing, particularly
					journalistic styles, a paragraph can be just one sentence long.
					Ultimately, a paragraph is a sentence or group of sentences that
					support one main idea. In this handout, we will refer to this as the
					“controlling idea,” because it controls what happens in the rest of
					the paragraph.
				</Typography>
				<Typography paragraph>
					Paragraphs are the building blocks of papers. Many students define
					paragraphs in terms of length: a paragraph is a group of at least five
					sentences, a paragraph is half a page long, etc. In reality, though,
					the unity and coherence of ideas among sentences is what constitutes a
					paragraph. A paragraph is defined as “a group of sentences or a single
					sentence that forms a unit” (Lunsford and Connors 116). Length and
					appearance do not determine whether a section in a paper is a
					paragraph. For instance, in some styles of writing, particularly
					journalistic styles, a paragraph can be just one sentence long.
					Ultimately, a paragraph is a sentence or group of sentences that
					support one main idea. In this handout, we will refer to this as the
					“controlling idea,” because it controls what happens in the rest of
					the paragraph.
				</Typography>
			</Main>
		</Box>
	);
}

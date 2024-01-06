import React from "react";
import { Container, Grid, Box, Typography, Stack, Link } from "@mui/material";

const NavLayout = (props) => {
    const{logo, homeLink, aboutLink, statementLink, logoText } = props;
    return (
        <Box 
            sx={{backgroundColor:"#be5c41"}}
        >
        <Grid>
            <Stack direction="row"
                    sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        width:"100%",
                        pr:"1em"
                    }}
                    >        {logo}
                    <Typography
                        sx={{
                            color:"#2D1010",
                            fontFamily: "Arial",
                            fontSize: "45px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                            ml:"0.25em",
                        }}
                    >
                        <Link href="../Home.jsx"  underline="none" color= "#000">{logoText}</Link>
                    </Typography>
                    <Box>
                        <Stack direction="row"
                            sx={{
                                justifyItems:"space-between",
                                px:"0.5em"
                            }}
                        >
                                <Typography
                                sx={{
                                    underline:"none",
                                    overflow:"hidden",
                                    color: "#000",
                                    textAlign: "center",
                                    textOverflow: "ellipsis",
                                    fontFamily: "Arial",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    lineHeight: "normal",
                                    mt:"1em",
                                    pr:"1em"
                                }}
                                >
                                <Link href="../Home.jsx" underline="none" color= "#000">{homeLink}</Link>
                                </Typography>
                            
                                <Typography
                                sx={{
                                    underline:"none",
                                    overflow:"hidden",
                                    color: "#000",
                                    textAlign: "center",
                                    textOverflow: "ellipsis",
                                    fontFamily: "Arial",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    lineHeight: "normal",
                                    mt:"1em",
                                    pr:"1em"
                                }}
                                >
                                <Link href="#" underline="none" color= "#000">{aboutLink}</Link>
                                </Typography>
                                <Typography
                                sx={{
                                    overflow:"hidden",
                                    color: "#000",
                                    textAlign: "center",
                                    textOverflow: "ellipsis",
                                    fontFamily: "Arial",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    lineHeight: "normal",
                                    mt:"1em"
                                }}>
                                <Link href="../Statement.jsx"  underline="none" color= "#000">{statementLink}</Link>
                                </Typography>
                        </Stack>
                    </Box>
                </Stack>
                </Grid>
        </Box >
    );
};

export default NavLayout;
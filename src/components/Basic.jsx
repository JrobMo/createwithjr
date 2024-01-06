import React from "react";
import ReactDOM from 'react-dom';
import { Container, Grid, Box, Typography, Stack, Link, List, ListItemText, Button } from "@mui/material";
import {Table,TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

const Basic = (props) => {
    const { dice, labelOne, labelTwo, labelThree, number } = props;
    const container = document.getElementById("diceContainer2");
    return (
        <Container>
                <Stack>
                    <Typography>
                        Test test 
                    </Typography>
                </Stack>
        </Container>
    );
};

export default Basic;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger} timeout={500}>
            {children}
        </Slide>
    );
}

export default function HideAppBar(props: Props) {
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        {props.children}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>


        </React.Fragment>
    );
}
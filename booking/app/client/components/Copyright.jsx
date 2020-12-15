import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Copyright extends React.Component{
    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                {'2008 - '}
                { new Date().getFullYear()}
                {' '}
                <Link color="inherit" href="https://evrone.ru/">
                    Evrone
                </Link>
                {'.'}
            </Typography>
        );
    }
}

export default Copyright

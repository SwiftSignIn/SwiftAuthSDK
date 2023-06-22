import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import SwiftIcon from './SwiftIcon';

const SignInWithSwift = ({ theme, handleClick }) => {
    
    const btnStyle = {
        color: theme === 'light' ? 'black' : 'white',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        border: '1px solid',
        borderColor: theme === 'light' ? 'black' : 'white',
        textTransform: 'none',
    };

    return (
        <Button
            variant="contained"
            style={btnStyle}
            startIcon={<SwiftIcon theme={theme} />}
            onClick={handleClick}
        >
            Sign in with Swift
        </Button>
    );
};

export default SignInWithSwift;
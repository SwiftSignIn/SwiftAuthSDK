import React, { useState, useEffect } from 'react';
import SwiftAuth from '../SwiftAuth';
import Button from '@material-ui/core/Button';
import SwiftIcon from './SwiftIcon';

const SignInWithSwift = ({ config }) => {
    const [swiftAuthState, setSwiftAuthState] = useState(null);
    
    const swiftAuth = new SwiftAuth(config);

    useEffect(() => {
        swiftAuth.generateAuthRequest()
            .then(setSwiftAuthState)
            .catch(console.error);
    }, []);

    const handleClick = () => {
        swiftAuth.pollForAuthStatus()
            .then(setSwiftAuthState)
            .catch(console.error);
    };

    return (
        <Button
            variant="contained"
            color="default"
            startIcon={<SwiftIcon />}
            onClick={handleClick}
        >
            Sign in with Swift
        </Button>
    );
};

export default SignInWithSwift;

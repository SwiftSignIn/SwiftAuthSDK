import React, { useState, useEffect } from 'react';
import SwiftAuth from './SwiftAuth';
import Button from '@material-ui/core/Button';
import SwiftIcon from './SwiftIcon';

const SignInWithSwift = () => {
    const [swiftAuthState, setSwiftAuthState] = useState(null);
    
    const swiftAuth = new SwiftAuth({
        host: process.env.REACT_APP_SWIFT_HOST,
        generateAuthRequestUrl: process.env.REACT_APP_SWIFT_GENERATE_AUTH_REQUEST_URL,
        pollForAuthStatusUrl: process.env.REACT_APP_SWIFT_POLL_FOR_AUTH_STATUS_URL,
        authorization: process.env.REACT_APP_SWIFT_AUTHORIZATION,
    });

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

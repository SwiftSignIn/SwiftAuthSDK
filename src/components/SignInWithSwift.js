import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import SwiftIcon from './SwiftIcon';

const SignInWithSwift = ({ config, handleClick }) => {
    return (
        <Button
            variant="contained"
            color="default"
            startIcon={<SwiftIcon />}
            onClick={handleClick || console.log("You haven't overridden this prop \'handleClick\' yet!")}
        >
            Sign in with Swift
        </Button>
    );
};

export default SignInWithSwift;

import React from 'react';
import blackIcon from '../images/swift-icon-only-black.png';
import whiteIcon from '../images/swift-icon-only-white.png';

const SwiftIcon = ({ theme, style }) => {
    return (
      <img
        src={theme === 'light' ? blackIcon : whiteIcon}
        alt="My Custom Icon"
        style={{ 
            width: '75%', 
            height: '75%', 
            backgroundColor: theme === 'light' ? 'white' : 'black', 
            ...style 
        }}
      />
    );
};

export default SwiftIcon;
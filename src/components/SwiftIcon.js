import React from 'react';
import myCustomIcon from '../images/swiftWhiteBackgroundCenter.png';

const SwiftIcon = (props) => {
    return (
      <img
        src={myCustomIcon}
        alt="My Custom Icon"
        style={{ width: '75%', height: '75%', ...props.style }}
      />
    );
  };
export default SwiftIcon;

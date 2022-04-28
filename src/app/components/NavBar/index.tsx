import React, { useState } from 'react';
import styled from 'styled-components/macro';

export function NavBar() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <Wrapper>
        <div className="topbar flex flex-between p-1 bg-white border-bottom-cricle">
          <div className="sidenavToggle">
            <div className="cricle-border">Menu</div>
          </div>
          <div className="logo">X-change</div>
          <div className="price border-radius-">2000$</div>
          <div className="package">Pack</div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  .logo {
    display: block;
  }
  .price {
    display: none;
    padding-top: 0.5rem !important;
    background: #95d5b2;
  }
  .sidenavToggle {
    display: none;
  }
  @media screen and (max-width: 600px) {
    .logo {
      display: none;
    }
    .price {
      display: block;
    }
    .sidenavToggle {
      display: block;
    }
  }
`;

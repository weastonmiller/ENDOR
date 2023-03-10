/** @jsxImportSource theme-ui */

import { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, [window.scrollY]);

  return (
    <div
      sx={{
        height: '55px',
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem',
        position: 'fixed',
        transition: '0.2s ease all',
        boxShadow: scrolled ? '0 1px 10px 1px rgba(0, 0, 0, 0.12)' : 'none',
        top: 0,
        zIndex: 999,
      }}
    >
      <Typography.Title
        level={2}
        style={{ margin: 0, fontFamily: 'Gloock', cursor: 'pointer' }}
        onClick={() => {
          location.assign('/');
        }}
      >
        ENDOR
      </Typography.Title>
      <div
        sx={{
          display: 'flex',
          width: 'fit-content',
          height: 'fit-content',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            location.assign('/upload');
          }}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}

/** @jsxImportSource theme-ui */

import { Typography } from 'antd';

export default function Header() {
  return (
    <div
      sx={{
        height: '55px',
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 1rem',
      }}
    >
      <Typography.Title level={2} style={{ margin: 0, fontFamily: 'Gloock' }}>
        TagDex
      </Typography.Title>
    </div>
  );
}

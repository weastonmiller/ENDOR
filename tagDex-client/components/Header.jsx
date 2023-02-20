/** @jsxImportSource theme-ui */
import { TagsOutlined } from '@ant-design/icons';

import { Typography } from 'antd';

export default function Header() {
  return (
    <div
      sx={{
        height: '55px',
        width: '100%',
        backgroundColor: 'primary',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
      }}
    >
      <TagsOutlined style={{ fontSize: '20pt', marginRight: '0.4rem' }} />
      <Typography.Title level={2} style={{ margin: 0, color: '#FFFFFF' }}>
        TagDex
      </Typography.Title>
    </div>
  );
}

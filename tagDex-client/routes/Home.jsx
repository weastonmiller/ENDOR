/** @jsxImportSource theme-ui */
import { Typography } from 'antd';

export default function Home() {
  return (
    <div
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography.Title
        style={{
          color: 'text',
          padding: '0.5rem',
        }}
      >
        始まるぞ
      </Typography.Title>
    </div>
  );
}

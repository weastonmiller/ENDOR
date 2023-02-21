/** @jsxImportSource theme-ui */
import { Tag } from 'antd';
import { useLocation } from 'react-router-dom';
import { thing } from '../assets/index';

export default function PostDetail() {
  const location = useLocation();

  const postIndex = thing.findIndex(
    (item) => item._id === location.pathname.split('/')[1]
  );

  return (
    <div
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        sx={{
          display: 'flex',
          height: 'fit-content',
          width: 'fit-content',
        }}
      >
        <img
          src={thing[postIndex].src}
          sx={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '2px',
          }}
        />
      </div>

      <div
        sx={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          padding: '0 1rem',
        }}
      >
        {thing[postIndex].tags.map((tag) => (
          <Tag color="#ffc53d" key={tag._id} style={{ width: 'fit-content' }}>
            {tag.title}
          </Tag>
        ))}
      </div>
    </div>
  );
}

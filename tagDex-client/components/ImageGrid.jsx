/** @jsxImportSource theme-ui */
import { useNavigate } from 'react-router-dom';
import { Button, Select, Typography, Tag, Input } from 'antd';
import { thing } from '../assets';

function GridItem({ item }) {
  const navigate = useNavigate();

  return (
    <div
      sx={{ height: '220px', width: '315px' }}
      className="grid-item"
      onClick={() => {
        navigate(`/${item._id}`);
      }}
    >
      <img
        src={item.src}
        sx={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
          borderRadius: '2px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}

export default function ImageGrid() {
  return (
    <div
      sx={{
        display: 'flex',
        width: '100%',
        height: 'fit-content',
        flexDirection: 'column',
      }}
    >
      <div className="grid-root">
        {thing.map((item) => (
          <GridItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

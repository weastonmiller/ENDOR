/** @jsxImportSource theme-ui */
import { useNavigate } from 'react-router-dom';
import { Button, Select, Typography, Tag, Input } from 'antd';
import { thing } from '../assets';

function GridItem({ item, gridSize }) {
  const navigate = useNavigate();

  return (
    <div
      sx={{
        height:
          gridSize === '500px'
            ? '350px'
            : gridSize === '350px'
            ? '250px'
            : '175px',
        width: '100%',
      }}
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

export default function ImageGrid({ gridSize }) {
  return (
    <div
      sx={{
        display: 'flex',
        width: '100%',
        height: 'fit-content',
        flexDirection: 'column',
      }}
    >
      <div
        className="grid-root"
        sx={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${gridSize}, 1fr))`,
        }}
      >
        {thing.map((item) => (
          <GridItem item={item} key={item._id} gridSize={gridSize} />
        ))}
      </div>
    </div>
  );
}

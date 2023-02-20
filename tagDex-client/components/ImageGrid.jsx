/** @jsxImportSource theme-ui */
import { useNavigate } from 'react-router-dom';
import { thing } from '../assets';

function GridItem({ item }) {
  const navigate = useNavigate();

  return (
    <div
      sx={{ height: '300px', width: '250px' }}
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
    <div className="grid-root">
      {thing.map((item) => (
        <GridItem item={item} key={item._id} />
      ))}
    </div>
  );
}

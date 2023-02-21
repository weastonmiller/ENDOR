/** @jsxImportSource theme-ui */

import ImageGrid from '../components/ImageGrid';

export default function Browse() {
  return (
    <div
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ImageGrid />
    </div>
  );
}

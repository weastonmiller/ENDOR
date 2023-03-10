/** @jsxImportSource theme-ui */

import { TypeAnimation } from 'react-type-animation';
import { capitalizeString, options } from '../utils';

export default function AnimatedText() {
  return (
    <div
      sx={{
        height: 'fit-content',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <TypeAnimation
        sequence={[
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
          capitalizeString(options[Math.floor(Math.random() * 22)].label),
          4000,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        speed={1}
        style={{
          fontSize: '30px',
          fontFamily: 'Gloock',
          backgroundColor: 'black',
          color: 'white',
          padding: '0.3rem 0.7rem',
        }}
      />
    </div>
  );
}

/** @jsxImportSource theme-ui */

import ImageGrid from '../components/ImageGrid';
import { Input, Typography } from 'antd';
import { TypeAnimation } from 'react-type-animation';

const words = [
  'Dagobah',
  'Tatooine',
  'Mustafar',
  'Kashyyk',
  'Coruscant',
  'Bith',
  'Wookiee',
  'Gungan',
  'Jedi',
  'Sith',
  'Droid',
  'Blaster',
  'Lightsaber',
  'X-Wing',
  'TIE Fighter',
];

export default function Home() {
  return (
    <div
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <ImageGrid /> */}
      <div
        sx={{
          height: 'fit-content',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
      >
        <div
          sx={{
            height: 'fit-content',
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography.Title
            level={2}
            style={{ fontFamily: 'Gloock', margin: 0, marginRight: '0.4rem' }}
          >
            Search for
          </Typography.Title>
        </div>

        {/* <Typography.Title
          level={2}
          style={{
            fontFamily: 'Gloock',
            backgroundColor: '#000000',
            padding: '0rem 0.7rem 1rem 0.7rem',
            color: '#ffffff',
            margin: 0,
          }}
          class="content__container__list__item"
        >
          Dagobah
        </Typography.Title> */}
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
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
              4000,
              words[Math.floor(Math.random() * 14)],
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
      </div>
      <Input
        style={{ width: '50%' }}
        placeholder="Ex: landspeeder"
        allowClear
      />
    </div>
  );
}

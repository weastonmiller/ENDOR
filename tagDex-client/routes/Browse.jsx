/** @jsxImportSource theme-ui */

import { useState, useEffect } from 'react';
import { Button, Select, Typography, Tag, Input } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import ImageGrid from '../components/ImageGrid';
import {
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
} from 'react-icons/tfi';
import { useLocation } from 'react-router-dom';

const options = [
  { label: 'tatooine', value: 'tatooine', _id: 'ersjber' },
  { label: 'kashyyyk', value: 'kashyyyk', _id: '234wreu89i' },
  { label: 'dagobah', value: 'dagobah', _id: 'wegrd' },
  { label: 'mustafar', value: 'mustafar', _id: '56ryhg' },
  { label: 'coruscant', value: 'coruscant', _id: 'fvrted' },
  { label: 'naboo', value: 'naboo', _id: 't678gy' },
  { label: 'bith', value: 'bith', _id: '2534twr' },
  { label: 'wookiee', value: 'wookiee', _id: 'erergdf' },
  { label: 'gungan', value: 'gungan', _id: '2tw4rge' },
  { label: 'womprat', value: 'womprat', _id: '524twrg' },
  { label: 'wampa', value: 'wampa', _id: 'i68kut' },
  { label: 'rancor', value: 'rancor', _id: '756rtfgyuv' },
  { label: 'sarlacc', value: 'sarlacc', _id: '235rwteg' },
  { label: 'jedi', value: 'jedi', _id: 'ersjwergdfb' },
  { label: 'sith', value: 'sith', _id: '23dfbeu89i' },
  { label: 'droid', value: 'droid', _id: 'ewrgs' },
  { label: 'astromech', value: 'astromech', _id: '2r4wef0y8h' },
  { label: 'blaster', value: 'blaster', _id: '2t34wge' },
  { label: 'x-wing', value: 'x-wing', _id: '2ty34erg' },
  { label: 'a-wing', value: 'a-wing', _id: 'qw3rafegs' },
  { label: 'y-wing', value: 'y-wing', _id: 'e64drct' },
  { label: 't-16', value: 't-16', _id: '8u9ioyh' },
];

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color="#389e0d"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

export default function Browse() {
  const [search, setSearch] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        sx={{
          display: 'flex',
          width: '100%',
          height: 'fit-content',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div
          sx={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input.Group
            compact
            style={{
              width: '100%',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder={
                <div
                  sx={{
                    height: 'fit-content',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <TagOutlined
                    className="site-form-item-icon"
                    style={{ marginRight: '0.5rem' }}
                  />
                  Ex. landspeeder
                </div>
              }
              tagRender={tagRender}
              onChange={(e) => {
                setSearch(e);
              }}
              options={options}
              value={search}
            />
            <Button
              type="primary"
              style={{
                width: 'fit-content',
                height: 'auto',
                margin: 0,
              }}
              disabled={!search || !search.length}
              onClick={() => {
                navigate('/browse');
              }}
            >
              Search
            </Button>
          </Input.Group>
        </div>
        <Input.Group style={{ width: 'fit-content' }}>
          <Button>
            <TfiLayoutGrid2Alt />
          </Button>
          <Button type="primary">
            <TfiLayoutGrid3Alt />
          </Button>
          <Button>
            <TfiLayoutGrid4Alt />
          </Button>
        </Input.Group>
      </div>
      <ImageGrid />
    </div>
  );
}

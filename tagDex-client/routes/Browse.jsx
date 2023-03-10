/** @jsxImportSource theme-ui */

import { useState, useEffect } from 'react';
import { Button, Select, Typography, Tag, Input, Radio } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import ImageGrid from '../components/ImageGrid';
import {
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
} from 'react-icons/tfi';
import { useLocation, useNavigate } from 'react-router-dom';
import { options, tagRender } from '../utils';

export default function Browse() {
  const [search, setSearch] = useState([]);
  const [gridSize, setGridSize] = useState(localStorage.getItem('gridSize'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search && location.search.length > 0) {
      setSearch(location.search.substring(1).split('+'));
    }
  }, [location]);

  useEffect(() => {
    if (!localStorage.getItem('gridSize')) {
      localStorage.setItem('gridSize', '350px');
    } else if (localStorage.getItem('gridSize')) {
      setGridSize(localStorage.getItem('gridSize'));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gridSize', gridSize);
  }, [gridSize]);

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
              maxTagCount="responsive"
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
                navigate({ pathname: '/browse', search: search.join('+') });
              }}
            >
              Search
            </Button>
          </Input.Group>
        </div>
        <Radio.Group
          value={gridSize}
          buttonStyle="solid"
          onChange={(e) => setGridSize(e.target.value)}
        >
          <Radio.Button value="500px">
            <TfiLayoutGrid2Alt />
          </Radio.Button>
          <Radio.Button value="350px">
            <TfiLayoutGrid3Alt />
          </Radio.Button>
          <Radio.Button value="250px">
            <TfiLayoutGrid4Alt />
          </Radio.Button>
        </Radio.Group>
      </div>
      <ImageGrid gridSize={gridSize} />
    </div>
  );
}

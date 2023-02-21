/** @jsxImportSource theme-ui */
import { Divider, Empty, Tag, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { thing } from '../assets/index';
import moment from 'moment';

export default function PostDetail() {
  const [post, setPost] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setPost(
      thing[
        thing.findIndex((item) => item._id === location.pathname.split('/')[1])
      ]
    );
  }, []);

  if (!post) {
    return (
      <div>
        <Empty />
      </div>
    );
  }

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
          src={post.src}
          sx={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Tags */}
      <div
        sx={{
          display: 'flex',
          height: 'fit-content',
          width: '60%',
          flexDirection: 'column',
          padding: '0 1rem',
        }}
      >
        <Typography.Text style={{ margin: 0 }} type="secondary" italic>
          {post.author.sub}
        </Typography.Text>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {post.message}
        </Typography.Title>
        <Divider style={{ margin: '0.5rem 0rem 0.9rem 0rem' }} />
        <div
          sx={{
            display: 'flex',
            height: 'fit-content',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          {post.tags.map((tag) => (
            <Tag
              color="#ffc53d"
              key={tag._id}
              style={{
                width: 'fit-content',
                marginRight: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              {tag.label}
            </Tag>
          ))}
        </div>
        <Divider style={{ margin: '0.9rem 0rem 0.5rem 0rem' }} />
        <div
          sx={{
            display: 'flex',
            width: '100%',
            height: 'fit-content',
            alignItems: 'center',
          }}
        >
          <Typography.Text style={{ margin: 0, marginRight: '0.5rem' }} strong>
            Created:
          </Typography.Text>
          <Typography.Text style={{ margin: 0 }} type="secondary" italic>
            {moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
          </Typography.Text>
        </div>
        <div
          sx={{
            display: 'flex',
            width: '100%',
            height: 'fit-content',
            alignItems: 'center',
          }}
        >
          <Typography.Text style={{ margin: 0, marginRight: '0.5rem' }} strong>
            Last Updated:
          </Typography.Text>
          <Typography.Text style={{ margin: 0 }} type="secondary" italic>
            {moment(post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
          </Typography.Text>
        </div>
      </div>
    </div>
  );
}

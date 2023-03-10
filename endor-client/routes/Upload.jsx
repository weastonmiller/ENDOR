/** @jsxImportSource theme-ui */

import { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Upload } from 'antd';
import { options, tagRender } from '../utils';
import { TagOutlined, InboxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

// Tatooine
// Tag aggregation tool

// Naboo
// Kyber
// Ilum - Image 
// Media aggregation and classification tool
// TIE - Taggable Image Editor

// TODO: input sanitization and pre-post validation
// TODO: file uploading
export function UploadRoute() {
  const [submission, setSubmission] = useState({});

  const navigate = useNavigate();

  return (
    <div sx={{ height: '100%', width: '100%', padding: '1rem' }}>
      <Form
        layout="vertical"
        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Form.Item label="Message">
          <Input
            placeholder="Ex. Here is a fun message about this image"
            onChange={(e) => {
              setSubmission({ ...submission, message: e.target.value });
            }}
            allowClear
          />
        </Form.Item>
        <Form.Item label="Tags">
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
              setSubmission({ ...submission, tags: e });
            }}
            options={options}
            value={submission.tags}
            maxTagCount="responsive"
          />
        </Form.Item>
        <Form.Item label="File To Upload">
          <Upload.Dragger listType="picture" multiple={false} maxCount={1}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Upload.Dragger>
        </Form.Item>
        <Form.Item style={{ alignSelf: 'flex-end' }}>
          <Button
            type="primary"
            style={{ alignSelf: 'flex-end' }}
            disabled={!submission.tags || !submission.message}
            onClick={() => {
              navigate('/browse');
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

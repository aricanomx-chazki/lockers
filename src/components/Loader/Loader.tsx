import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { LoaderStyles } from './LoaderStyles';

export const Component_Loader = () => {
  return (
    <LoaderStyles>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 96 }} spin />} />
    </LoaderStyles>
  );
};

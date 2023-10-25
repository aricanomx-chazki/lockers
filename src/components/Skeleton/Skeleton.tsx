import { Skeleton } from 'antd';
import { SkeletonStyles } from './SkeletonStyles';

export const Component_Skeleton = () => {
  return (
    <SkeletonStyles>
      <div className="skeletonContainer">
        <Skeleton.Input
          active={true}
          style={{
            width: 200,
            height: 51,
            marginBottom: 20,
          }}
        />
        <Skeleton.Image
          style={{
            width: 300,
            height: 300,
          }}
          active={true}
        />
        <Skeleton.Input
          active={true}
          style={{
            width: 400,
            height: 100,
            marginBottom: 20,
          }}
        />
      </div>
    </SkeletonStyles>
  );
};

import { Skeleton } from 'antd';
import styled from 'styled-components';

const SkeletonStyles = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & > .skeletonContainer {
    height: 100%;
    width: inherit;
    display: grid;
    grid-template-rows: 15% 1fr 15%;
    place-items: center;
    @media (min-width: 440px) {
      width: 100%;
      max-width: 480px;
      margin: 0 auto;
      box-shadow: 0px 0px 100px 1px rgba(136, 139, 141, 0.5);
    }
  }
`;

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

import { Component_Logo, Component_Skeleton, Scanner } from 'src/components';
import { ScannerScreenStyles } from './ScannerStyles';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const Scanner_Screen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const navigate = useNavigate();

  const id = searchParams.get('id');
  const token = searchParams.get('session');
  const remaining = searchParams.get('remaining');
  const codeOperation = searchParams.get('codeOperation');

  useEffect(() => {
    if (token && id) {
      (async ({ id, token }) => {
        console.log('token', token, 'id', id);
        await axios({
          method: 'get',
          url: `https://chazki-qr.up.railway.app/validate/${id}/${token}`,
          responseType: 'json',
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false,
        })
          .then((res) => {
            navigate(`/locker`, {
              state: {
                id,
                token,
                remaining,
                codeOperation,
              },
            });
          })
          .catch((err) => console.log('Error: ', err));
      })();
    }
    if (codeOperation) setShowScan(true);
  }, [codeOperation, id, navigate, remaining, token]);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <Component_Skeleton />
      ) : (
        <ScannerScreenStyles>
          <Component_Logo color="blue-green" />

          {showSkeleton && (
            <Skeleton.Image
              style={{
                width: 300,
                height: 300,
              }}
              active={true}
            />
          )}

          {showScan && (
            <Scanner
              showQrModal={showQrModal}
              setShowQrModal={setShowQrModal}
              codeOperation={codeOperation}
            />
          )}
        </ScannerScreenStyles>
      )}
    </>
  );
};

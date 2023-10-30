import { Component_Logo, Component_Skeleton, Scanner } from 'src/components';
import { ScannerScreenStyles } from './ScannerStyles';
import { Skeleton } from 'antd';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const Scanner_Screen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showScan, setShowScan] = useState(false);

  const id = searchParams.get('id');
  const token = searchParams.get('session');
  // const remaining = searchParams.get('remaining');
  // const codeOperation = searchParams.get('codeOperation');
  const request = async ({ id, token }) => {
    console.log(token, id);
    await axios({
      method: 'get',
      url: `https://chazki-qr.up.railway.app/validate/${id}/${token}`,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    })
      .then(() => {
        //  if (
        //    res.status === 200 &&
        //    codeOp === search.split('?codeOperation=')[1]
        //  ) {
        //    navigate(`/locker`, {
        //      state: {
        //        seedId,
        //        token,
        //        timer,
        //        codeOp,
        //      },
        //    });
        //  }
        //  if (res.status === 200 && search.length === 0) {
        //    navigate(`/validation`, {
        //      state: { seedId, token, timer, codeOperation: codeOp },
        //    });
        //  }
      })
      .catch((err) => console.warn(err))
      .finally(() => {});
  };

  if (id && token) {
    request({ id, token });
  }

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

          {showSkeleton ? (
            <Skeleton.Image
              style={{
                width: 300,
                height: 300,
              }}
              active={true}
            />
          ) : (
            <Scanner
              showQrModal={showQrModal}
              setShowQrModal={setShowQrModal}
              setSkeleton={setShowSkeleton}
              skeleton={showSkeleton}
            />
          )}
        </ScannerScreenStyles>
      )}
    </>
  );
};

import React from 'react';
import { AuthWidget } from '../widget';

const Dom = (auth: any) => {
  return (
    <>
      {!auth.uid && (
        <h2 style={{ height: 500 }} className="center">
          登录之后你将看到一张美女图
        </h2>
      )}
      {auth.permissions && auth.permissions.includes('auth/authPage/visit') && (
        <>
          {(auth.permissions.includes('auth/authPage/edit') && (
            <p>管理员身份登录才能看到这两段话</p>
          )) || <p>管理员登录将看到不一样的效果</p>}
        </>
      )}
    </>
  );
};

const Basic = () => <AuthWidget children={Dom} />;

export default Basic;

import React, { Component } from 'react';
import { AuthWidget } from '../widget';

const RouterEnter = () => (
  <AuthWidget
    children={(auth: any) => {
      return '只有管理员登录才能看到该页面，否则跳转到404页面';
    }}
  />
);

export default RouterEnter;

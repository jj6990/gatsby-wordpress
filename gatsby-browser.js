import React from 'react';
import Layout from './src/components/Layout';
import AuthState from './src/context/auth/AuthState'

export function wrapPageElement({ element, props }) {
  return (
    <AuthState>
      <Layout {...props}> {element}</Layout>
    </AuthState>
  );
}

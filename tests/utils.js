import { render as tlrRender } from '@testing-library/react';
import React from 'react';
import { getRuntimeConfig } from '~config';
import EnvironmentContext from '~contexts/environment';

export { act, fireEvent, screen } from '@testing-library/react';

export const render = component => {
  const config = getRuntimeConfig();

  return tlrRender(
    <EnvironmentContext.Provider value={{ ...config }}>{component}</EnvironmentContext.Provider>
  );
};

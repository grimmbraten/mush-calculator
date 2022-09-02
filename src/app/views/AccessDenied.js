import { Alert } from '@mantine/core';
import React from 'react';
import { AlertCircle } from 'tabler-icons-react';

const AccessDenied = () => (
  <Alert icon={<AlertCircle size={16} />} title="Bummer!" color="red">
    Seems like you do not have access to this page.
  </Alert>
);

export default AccessDenied;

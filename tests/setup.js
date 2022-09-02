console.log = jest.fn();

require('@testing-library/jest-dom');
require('dotenv').config({ path: '.env.test' });

jest.useFakeTimers('modern');
jest.setSystemTime(new Date(Date.UTC(2007, 1, 7, 9, 41)));

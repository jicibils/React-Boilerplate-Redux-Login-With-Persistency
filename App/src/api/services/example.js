import API from '../api';

const PREFIX = '/example';

export const getHelloWorld = () => API.get(PREFIX + '/getHelloWorld');

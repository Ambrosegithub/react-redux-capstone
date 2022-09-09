import http from './http';

const callDetails = (id) => http.get(`/${id}`);

export default callDetails;

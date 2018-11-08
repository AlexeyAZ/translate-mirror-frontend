import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.APIURL,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwicGFzc3dvcmQiOiJ0ZXN0IiwiX2lkIjoiNWJlMWU5N2RlZWZlMDQ1OTYxZDBmY2E3IiwiaWF0IjoxNTQxNjc3OTI4LCJleHAiOjE1NDE2ODUxMjh9.aqG9vh9ePqGxQc1ey0U8b6-PY6TFpbLD_Jlfsh53MQk',
  }
});

export default api;

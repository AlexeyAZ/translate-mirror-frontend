const config = {
  APIURL: process.env.NODE_ENV === 'production'
    ?
      'https://translate-mirror.herokuapp.com/api/'
    :
      'http://localhost:5000/api/',
};

export default config;
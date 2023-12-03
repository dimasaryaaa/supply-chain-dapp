const {
  REACT_APP_API = 'http://localhost:8080',
  REACT_APP_KEY = 'key',
  REACT_APP_ADDRESS = '0x5d82CCAa87b74184A1D376395484155F972C280E'
} = process.env;

module.exports = {
  hostUri: REACT_APP_API,
  apiKey: REACT_APP_KEY,
  address: REACT_APP_ADDRESS
};

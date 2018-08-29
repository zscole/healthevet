const ipfsApi = require('ipfs-api');
const ipfs = new ipfsApi('172.16.8.8', '5001', {protocol: 'http'});

export default ipfs; 

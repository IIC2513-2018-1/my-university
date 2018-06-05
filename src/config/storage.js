module.exports = {
  provider: 'amazon',
  keyId: process.env.STORAGE_KEY,
  key: process.env.STORAGE_SECRET,
  region: 'nyc3',
  endpoint: 'https://nyc3.digitaloceanspaces.com',
};

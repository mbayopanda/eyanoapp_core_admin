const { createPublicKey } = require('crypto');
const { jwtVerify } = require('jose');
const fs = require('fs');
const path = require('path');

const publicEd25519KeyFilePath = path.resolve(__dirname, '../keys/eyanoapp.public.key');
const publicEd25519Key = fs.readFileSync(publicEd25519KeyFilePath).toString();
const publicEd25519Cert = createPublicKey(publicEd25519Key);

// ISSUER MUST BE THE SAME AS AT THE SERVER
const issuer = 'EyanoApp';

const verify = async jwtPayload => {
  try {
    const { payload } = await jwtVerify(
      jwtPayload, publicEd25519Cert, { issuer },
    );
    return payload;
  } catch (error) {
    return false;
  }
};

module.exports = verify;

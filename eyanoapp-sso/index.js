/* eslint-disable no-undef */
const verifyJwtToken = require('./jwt_verify');

module.exports = (parameters = {
  sso_server : process.env.EYANOAPP_SSO_SERVER,
  app_token : process.env.EYANOAPP_APP_TOKEN,
}) => {
  return async function fn(req, res, next) {
    const redirectURL = `${req.protocol}://${req.headers.host}${req.path}`;
    const ssoServer = parameters.sso_server;
    const { ssoToken } = req.query;
    const ssoTokenInSession = req.session.token;

    const TOKEN = ssoToken || ssoTokenInSession;

    if (TOKEN) {
      const decoded = await verifyJwtToken(TOKEN);
      if (!decoded) {
        // token expired, destroy session's variables
        delete req.session.user;
        delete req.session.token;
        req.session.destroy();
      } else {
        // token verified, refresh session's variables
        req.session.user = decoded;
        req.session.token = TOKEN;
      }
    }

    // redirect into the sso-server login page
    // when there is no user in the session
    if (!req.session || (req.session && !req.session.user)) {
      return res.redirect(
        `${ssoServer}/login?serviceURL=${redirectURL}&appToken=${parameters.app_token}&lock=1`,
      );
    }

    // add token in cookies
    res.cookie('ssoToken', req.session.token);
    
    // continue the normal routing
    return next();
  };
};

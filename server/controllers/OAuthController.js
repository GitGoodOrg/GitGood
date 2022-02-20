const fetch = require('node-fetch');

const OAuthController = {};


OAuthController.getToken = async (req, res, next) => {
  const requestToken = req.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${requestToken}&scope=user,repo`;

  try {
    const tokenJSON = await fetch(url, {
      method: 'post',
      headers: {'Accept': 'application/json'}
    });
    const token = await tokenJSON.json();
    res.locals.access_token = token.access_token;

    next();
  } catch(err) {
    return next({
      log: `Error in OAuthController.getToken Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
  // console.log(token)
};

OAuthController.getProfile = async (req, res, next) => {
  const url = 'https://api.github.com/user';
  try {
    const profileInfoJSON = await fetch(url,{
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: 'token ' + res.locals.access_token,
      },
    });
    const profileInfo = await profileInfoJSON.json();
    res.locals.profile = profileInfo;
    next();
  } catch(err) {
    return next({
      log: `Error in OAuthController.getProfile Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

// OAuthController.getRepo = async (req, res, next) => {
//   const url = res.locals.profile.data.repos_url
//   let repoInfo;
//   try {
//     repoInfo = await axios({
//       method: 'get',
//       url,
//       headers: {
//         accept: 'application/json',
//         Authorization: 'token ' + req.cookies.ssid,
//       },
//     });
//     res.locals.repo = repoInfo;
//     next();
//   } catch(err) {
//     return next(err);
//   }
// }

module.exports = OAuthController;

import qs from 'qs';

export function spotifyAuthRedirect({ clientId, scopesString = '', stateDict = {} }) {
  var redirectURI =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname;

  var stateString = qs.stringify(stateDict);
  var authURI =
    'https://accounts.spotify.com/authorize?' +
    'client_id=' +
    clientId +
    '&response_type=token' +
    '&scope=' +
    scopesString +
    '&redirect_uri=' +
    encodeURIComponent(redirectURI) +
    '&state=' +
    encodeURIComponent(stateString) +
    '&show_dialog=false';

  window.location.href = authURI;
}

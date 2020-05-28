spotify-auth-redirect
==================

Boilerplate code for redirecting the browser to a Spotify authorization page in a way that:

- Makes sure that the browser is properly redirected back to the current location correctly after the user authorizes
- Preserves a dictionary object reprsenting some kind of state by encoding it into the auth URI.

Installation
------------

    npm install spotify-auth-redirect

Usage
-----

    import { spotifyAuthRedirect } from 'spotify-auth-redirect';
    import { isSpotifyTokenValid } from 'is-spotify-token-valid';

    var currentState = {
      color: 'blue',
      quantity: 9000
    };

    isSpotifyTokenValid(myToken, proceedWithVerdict);

    function proceedWithVerdict(error, isValid) {
      if (error) {
        console.error('Error while checking token.', error);
        return;
      }

      if (isValid) {
        console.log('It is valid! Though not necessarily for all scopes.');
      } else {
        console.log('It is invalid. Let us redirect.');
        spotifyAuthRedirect({
          clientId: 'my-app-client-id',
          scopesString: 'user-read-recently-played playlist-modify-public',
          stateDict: currentState
        });
        // Browser then gets redirected away, but
        // returns to this location after authorization.
      }
    }

Note: `scopesString` and `stateDict` are optional params.

License
-------

The MIT License (MIT)

Copyright (c) 2020 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

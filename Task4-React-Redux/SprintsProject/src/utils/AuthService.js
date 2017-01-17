import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'

export default class AuthService {
    constructor(clientId, domain) {
        this.lock = new Auth0Lock(clientId, domain, {
            auth: {
                redirectUrl: 'http://localhost:3001/',
                responseType: 'token'
            }
        });
        this.lock.on('authenticated', this._doAuthentication.bind(this));
        this.login = this.login.bind(this)
    }

    _doAuthentication(authResult) {
        this.setToken(authResult.idToken);
        browserHistory.replace('/');

        // Async loads the user profile data
        this.lock.getProfile(authResult.idToken, (error, profile) => {
            if (error) {
                console.log('Error loading the Profile', error)
            } else {
                this.setProfile(profile)
            }
        });
    }

    login() {
        this.lock.show()
    }

    loggedIn() {
        return !!this.getToken()
    }

    setToken(idToken) {
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        return localStorage.getItem('id_token')
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    setProfile(profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
    // Triggers profile_updated event to update the UI
      //  this.emit('profile_updated', profile)
    }

    getProfile() {
        const profile = localStorage.getItem('profile');
        return profile ? JSON.parse(profile) : {}
    }
}
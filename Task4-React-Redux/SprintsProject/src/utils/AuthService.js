import Auth0Lock from 'auth0-lock'
import { EventEmitter } from 'events';
import {browserHistory} from 'react-router';

export default class AuthService extends EventEmitter {
    constructor(clientId, domain) {
        super(clientId, domain);
        this.lock = new Auth0Lock(clientId, domain, {
            auth: {
                redirectUrl: `${window.location.origin}/login`,
                responseType: 'token',
                params: {
                    scope: 'openid roles'
                }
            },
            closable: false
        });
        this.lock.on('authenticated', this._doAuthentication.bind(this));
        this.login = this.login.bind(this);
    }

    _doAuthentication(authResult) {
        this.setToken(authResult.idToken);

        this.lock.getProfile(authResult.idToken, (error, profile) => {
            if (error) {
                console.log('Error loading the Profile', error)
            } else {
                this.setProfile(profile);
                browserHistory.replace(this.getRedirect());
            }
        });
    }

    saveRedirect(url) {
        localStorage.setItem('redirect_url', url)
    }

    getRedirect() {
        return localStorage.getItem('redirect_url')
    }

    login() {
        this.saveRedirect(window.location.pathname);
        this.lock.show();
    }

    loggedIn() {
        return !!this.getToken()
    }

    isAdmin() {
        const profile = this.getProfile();
        const { roles } = profile.app_metadata || {};
        return !!roles && roles.indexOf('admin') > -1;
    }

    setToken(idToken) {
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        return localStorage.getItem('id_token')
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('redirect_url');
        this.emit('logout', window.location.pathname);
    }

    setProfile(profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
    }

    getProfile() {
        const profile = localStorage.getItem('profile');
        return profile ? JSON.parse(profile) : {}
    }
}
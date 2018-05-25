let store = null;

export class Auth {
    static doSignIn({ username, password }) {
        //authenticate and return user info;
        return Promise.resolve({
            username,
            displayName: 'Test User'
        });
    }

    static signIn(params) {
        return this.doSignIn(params)
                   .then(userInfo => {
                       sessionStorage.setItem('dummyUserInfo', JSON.stringify(userInfo));
                       store.set('user', userInfo);
                   })
    }

    static signOut() {
        //delete data from local/session storage or a cookie
        sessionStorage.setItem('dummyUserInfo', null);
        window.location.reload();
    }

    static getLoggedInUser() {
        //read user info
        let info = sessionStorage.getItem('dummyUserInfo');
        if (info)
            return JSON.parse(info);

        //automatically log-in a test user
        if (info == undefined)
            return {
                username: 'test',
                displayName: 'TestUser'
            };

        return null;
    }

    static registerStore(s) {
        store = s;
        let user = this.getLoggedInUser();
        store.set('user', user);
    }
}
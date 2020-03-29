import Route from '@ember/routing/route';

const API_URL = 'http://localhost:3000/';

export default class IndexRoute extends Route {
    async model() {
        const response = await (await fetch(API_URL)).json();
        return response;
    }
}
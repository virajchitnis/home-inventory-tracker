import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        const response = await (await fetch('http://localhost:3000/')).json();
        return response;
    }
}
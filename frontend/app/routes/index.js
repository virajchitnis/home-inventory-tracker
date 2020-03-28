import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        return {
            items: [
                {
                    name: 'Chicken Breast Chunks',
                    oquant: 0,
                    nquant: 0,
                    exp_date: 'Mar 31st 2020'
                },
                {
                    name: 'Parmigiano Reggiano',
                    oquant: 0,
                    nquant: 0,
                    exp_date: 'Mar 31st 2020'
                },
                {
                    name: 'Waitrose Linguine',
                    oquant: 0,
                    nquant: 0,
                    exp_date: 'Mar 31st 2020'
                }
            ]
        };
    }
}
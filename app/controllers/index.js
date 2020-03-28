import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class IndexController extends Controller {
    @tracked
    searchString = '';

    get inventoryItems() {
        let filteredItems = this.model.items.filter(({name}) => name.toLowerCase().includes(this.searchString.toLowerCase()));
        return filteredItems;
    }

    get searchText() {
        return this.searchString;
    }

    set searchText(value) {
        this.searchString = value;
    }
}

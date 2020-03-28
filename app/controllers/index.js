import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class IndexController extends Controller {
    @tracked
    items = this.model.items;

    @tracked
    searchString = '';

    @tracked
    newItemName = '';
    @tracked
    newItemOquant = 0;
    @tracked
    newItemNquant = 0;
    @tracked
    newItemExpDate = '';

    get inventoryItems() {
        let filteredItems = this.items.filter(({name}) => name.toLowerCase().includes(this.searchString.toLowerCase()));
        return filteredItems;
    }

    get searchText() {
        return this.searchString;
    }

    set searchText(value) {
        this.newItemName = value;
        this.searchString = value;
    }

    get newName() {
        return this.newItemName;
    }

    set newName(value) {
        this.newItemName = value;
    }

    get newOquant() {
        return this.newItemOquant;
    }

    set newOquant(value) {
        this.newItemOquant = value;
    }

    get newNquant() {
        return this.newItemNquant;
    }

    set newNquant(value) {
        this.newItemNquant = value;
    }

    get newExpDate() {
        return this.newItemExpDate;
    }

    set newExpDate(value) {
        this.newItemExpDate = value;
    }

    @action
    createNewItem() {
        let newItem = {
            name: this.newItemName,
            oquant: this.newItemOquant,
            nquant: this.newItemNquant,
            exp_date: this.newItemExpDate
        };
        this.model.items.push(newItem);
        this.searchString = '';
    }

    @action
    itemEditingMode(item) {
        this.newItemOquant = item.oquant;
        this.newItemNquant = item.nquant;
        this.newItemExpDate = item.exp_date;

        let newItemsList = [];
        this.items.forEach((obj) => {
            if (obj === item) {
                obj.editing = true;
            }
            newItemsList.push(obj);
        });
        this.items = newItemsList;
    }

    @action
    updateItem(item) {
        let newItemsList = [];
        this.items.forEach((obj) => {
            if (obj === item) {
                let newItem = {
                    name: item.name,
                    oquant: this.newItemOquant,
                    nquant: this.newItemNquant,
                    exp_date: this.newItemExpDate
                };
                newItemsList.push(newItem);
            } else {
                newItemsList.push(obj);
            }
        });
        this.items = newItemsList;
    }
}

import Controller from '@ember/controller';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class UsersUserController extends Controller {
    @tracked showArchived =false;

    @action changeShowArchived(){
        this.showArchived = !this.showArchived 
    }

    get filteredItem(){
        return  this.get('model').filter((item)=>((!item.archived) || ( item.archived && this.showArchived)));
    }
}

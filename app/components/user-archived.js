import Component from '@glimmer/component';

import { action } from '@ember/object'
import { inject as service } from '@ember/service';

export default class UserArchivedComponent extends Component {

  @service store;

  get isArchived(){
  return this.args.userId
  }



  @action
  changeStatus() {
    this.args.user.archived = !this.args.user.archived;
    this.args.user.save()
     
  }

}
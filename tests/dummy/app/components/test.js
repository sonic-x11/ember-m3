import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import '@material/web/button/filled-button.js';
import { action } from '@ember/object';
export default class Test extends Component {
  @tracked test;
  @action
  testF() {
    this.test = true;
  }
}

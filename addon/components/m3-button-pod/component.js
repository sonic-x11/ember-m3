import Component from '@glimmer/component';
import '@material/web/button/filled-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/iconbutton/outlined-icon-button.js';
import { action } from '@ember/object';
export default class M3ButtonPodComponent extends Component {
  @action
  onClick(event) {
    if (this.args?.onClick) {
      this.args.onClick(this.args.context);
    }
  }
}

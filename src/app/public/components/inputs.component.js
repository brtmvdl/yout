import { HTML } from '@brtmvdl/frontend'
import { InputTextGroupComponent } from './input-text-group.component.js'
import { padLeft } from '../utils/str.js'

export class InputsComponent extends HTML {
  children = {
    q: new InputTextGroupComponent('q'),
    from: new InputTextGroupComponent('from', this.getFromInputDate()),
    to: new InputTextGroupComponent('to'),
    sortBy: new InputTextGroupComponent('sortBy', 'popularity'),
    country: new InputTextGroupComponent('country'),
    category: new InputTextGroupComponent('category'),
    language: new InputTextGroupComponent('language', 'pt'), // FIXME: select instead input text
    pageSize: new InputTextGroupComponent('pageSize', '100'),
    page: new InputTextGroupComponent('page', '1'),
    apiKey: new InputTextGroupComponent('apiKey', '', 'password'),
    key: new InputTextGroupComponent('key', '', 'password'),
    src: new InputTextGroupComponent('src'), // FIXME: parse to "url decoded string"
    hl: new InputTextGroupComponent('hl', 'pt-br'),
  }

  getFromInputDate() {
    const date = new Date()
    const day = +date.getDate()
    const month = +date.getMonth() + 1
    const year = +date.getFullYear()
    return [year, month, day].map((d) => padLeft(d, 2, '0')).join('-')
  }

  getComponent(component = '') {
    return this.children[component]
  }

  getValue(component) {
    return this.children[component].getValue()
  }
}

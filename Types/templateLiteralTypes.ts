/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
type Icon = 'google' | 'youtube';
type Size = 'sm' | 'md' | 'lg';
type IconSize = `${Icon}-${Size}`;

const iconSize: IconSize = 'google-md';

console.log(iconSize);

type MouseEvents = 'click' | 'mouseOver';

type KeyEvents = 'keypress' | 'keyup';

type Events = MouseEvents | KeyEvents;

type OnEvents = `on${Capitalize<Events>}`;

class HtmlElement {
  addEvenListener(_eventName: OnEvents, _callback: () => void) { console.log(`${_eventName} ${_callback}`); }

  emit(_eventName: Events, _data: unknown):void { console.log(`${_eventName} ${_data}`); }
}

const htmlElement = new HtmlElement();
htmlElement.addEvenListener('onClick', () => {});
htmlElement.emit('click', '');

// Mas avanzado

type toObject<T extends string> = T extends `${infer Key}:${infer Type}, ${infer Rest}`
  ? { [P in Key]: Type } & toObject<Rest>
  : T extends `${infer Key}:${infer Type}`
  ? { [P in Key]: Type }
  : never;

declare function stringToType<T extends string>(str: T): toObject<T>;

const t = stringToType('name: string');

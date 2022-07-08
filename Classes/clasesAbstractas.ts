/* eslint class-methods-use-this: ["error", { "enforceForClassFields": false }] */

abstract class Father {
  abstract caminar():void;

  abstract gatear():void;
}

class Son extends Father {
  caminar = (): void => console.log('caminar');

  gatear = (): void => console.log('gatear');
}

class OtraClase extends Father {
  caminar = (): void => console.log('caminar');

  gatear = (): void => console.log('gatear');
}

const hijo = new Son();
const otraClase = new OtraClase();

hijo.caminar();
hijo.gatear();

otraClase.caminar();
hijo.gatear();

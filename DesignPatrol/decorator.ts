/* * Decorators
*
*                             <interface>
*                           /             \
*                 implementation        BaseDecorator
*                                     /             \
*                              Decorator1          Decorator2
*
*/
interface Iloader {
  load(): string;
}
class Video implements Iloader {
  load(): string {
    return 'video';
  }
}

class Img implements Iloader {
  load(): string {
    return 'img';
  }
}
abstract class loaderDecorator implements Iloader {
  constructor(protected readonly loader: ILoader) {
    this.loader.loader;
  }

  load(): string {
    return this.loader.load;
  }
}

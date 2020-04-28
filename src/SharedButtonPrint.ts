import AbstractSharedbutton from './AbstractSharedButton';
import IEventHandler from './IEventHandler';

export default class SharedButtonPrint extends AbstractSharedbutton {

    constructor(eventHandler: IEventHandler, className: string) {
        super(eventHandler, className)
    }

    createAction() {
        return () => window.print();
    }
}
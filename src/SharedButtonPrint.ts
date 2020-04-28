import AbstractSharedbutton from './AbstractSharedButton';

export default class SharedButtonPrint extends AbstractSharedbutton {

    constructor(className: string) {
        super(className)
    }

    createAction() {
        return () => window.print();
    }
}
import IEventHandler from './IEventHandler';

export default abstract class AbstractSharedButton {
    eventHandler: IEventHandler;
    className: string

    constructor(eventHandler: IEventHandler, className: string) {
        this.eventHandler = eventHandler;
        this.className = className
    }

    abstract createAction();

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, "click", action)
    }
}
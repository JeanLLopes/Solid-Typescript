import EventHandler from './EventHandler';

export default abstract class SharedButton {
    eventHandler: EventHandler;
    className: string

    constructor(className: string) {
        this.eventHandler = new EventHandler();
        this.className = className
    }

    abstract createAction();

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, "click", action)
    }
}
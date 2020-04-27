import EventHandler from './EventHandler';

export default abstract class SharedButton {
    eventHandler: EventHandler;
    url: string;
    className: string

    constructor(url: string, className: string) {
        this.eventHandler = new EventHandler();
        this.url = url
        this.className = className
    }

    abstract createLink(): string;

    bind() {
        const link = this.createLink();
        this.eventHandler.addEventListenerToClass(this.className, "click", () => window.open(link))
    }
}
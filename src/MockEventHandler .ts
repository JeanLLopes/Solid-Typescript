import IEventHandler from './IEventHandler';


export default class DomEventHandler implements IEventHandler {
    addEventListenerToClass(className: string, event: string, fn: any) {
        console.warn('mock repositopry');

    }
}
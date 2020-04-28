import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventHandler';

export default class SharedButtonFacebook extends AbstractLinkShareButton {

    constructor(eventHandler: IEventHandler, url: string, className: string) {
        super(eventHandler, className, url)
    }

    createLink(): string {
        return `https://facebook.com/sharer.php?u=${this.url}/}`;
    }
}
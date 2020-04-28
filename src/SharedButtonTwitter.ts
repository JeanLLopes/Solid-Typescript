import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventHandler';

export default class SharedButtonTwitter extends AbstractLinkShareButton {

    constructor(eventHandler: IEventHandler, url: string, className: string) {
        super(eventHandler, className, url)
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }
}
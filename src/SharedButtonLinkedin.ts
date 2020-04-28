import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventHandler';

export default class SharedButtonLinkedin extends AbstractLinkShareButton {

    constructor(eventHandler: IEventHandler, url: string, className: string) {
        super(eventHandler, className, url)
    }

    createLink(): string {
        return `https://www.linkedin.com/sharedArticle?url=${this.url}`;
    }
}
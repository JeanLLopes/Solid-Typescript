import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class SharedButtonTwitter extends AbstractLinkShareButton {

    constructor(url: string, className: string) {
        super(className, url)
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }
}
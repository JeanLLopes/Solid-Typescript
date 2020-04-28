import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class SharedButtonFacebook extends AbstractLinkShareButton {

    constructor(url: string, className: string) {
        super(className, url)
    }

    createLink(): string {
        return `https://facebook.com/sharer.php?u=${this.url}/}`;
    }
}
import AbstractSharedbutton from './AbstractSharedButton';

export default class SharedButtonTwitter extends AbstractSharedbutton {

    constructor(url: string, className: string) {
        super(url, className)
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }
}
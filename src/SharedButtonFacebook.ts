import AbstractSharedbutton from './AbstractSharedButton';

export default class SharedButtonFacebook extends AbstractSharedbutton {

    constructor(url: string, className: string) {
        super(url, className)
    }

    createLink(): string {
        return `https://facebook.com/sharer.php?u=${this.url}/}`;
    }
}
import AbstractSharedbutton from './AbstractSharedButton';

export default class SharedButtonLinkedin extends AbstractSharedbutton {

    constructor(url: string, className: string) {
        super(url, className)
    }

    createLink(): string {
        return `https://www.linkedin.com/sharedArticle?url=${this.url}`;
    }
}
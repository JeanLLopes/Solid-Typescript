import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class SharedButtonLinkedin extends AbstractLinkShareButton {

    constructor(url: string, className: string) {
        super(className, url)
    }

    createLink(): string {
        return `https://www.linkedin.com/sharedArticle?url=${this.url}`;
    }
}
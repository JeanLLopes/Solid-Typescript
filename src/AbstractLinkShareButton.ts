import AbstractSharedButton from './AbstractSharedButton';

export default abstract class AbstractLinkShareButton extends AbstractSharedButton {
    url: string;

    constructor(className: string, url: string) {
        super(className);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    }

}

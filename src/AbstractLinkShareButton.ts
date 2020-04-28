import AbstractSharedButton from './AbstractSharedButton';
import IEventHandler from './IEventHandler';
export default abstract class AbstractLinkShareButton extends AbstractSharedButton {
    url: string;

    constructor(iEventHandler: IEventHandler, className: string, url: string) {
        super(iEventHandler, className);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    }

}

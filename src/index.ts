import SharedButtonFacebook from './SharedButtonFacebook';
import SharedButtonLinkedin from './SharedButtonLinkedin';
import SharedButtonTwitter from './SharedButtonTwitter';
import SharedButtonPrint from './SharedButtonPrint';
import DomEventHandler from './DomEventHandler';

const eventHandler = new DomEventHandler()

const facebook = new SharedButtonFacebook(eventHandler, "https://www.youtube.com", ".btn-facebook");
facebook.bind();

const twitter = new SharedButtonTwitter(eventHandler, "https://www.youtube.com", ".btn-twitter");
twitter.bind();

const linkedin = new SharedButtonLinkedin(eventHandler, "https://www.youtube.com", ".btn-linkedin");
linkedin.bind();

const print = new SharedButtonPrint(eventHandler, ".btn-print");
print.bind();
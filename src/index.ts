import SharedButtonFacebook from './SharedButtonFacebook';
import SharedButtonLinkedin from './SharedButtonLinkedin';
import SharedButtonTwitter from './SharedButtonTwitter';
import SharedButtonPrint from './SharedButtonPrint';

const facebook = new SharedButtonFacebook("https://www.youtube.com", ".btn-facebook");
facebook.bind();

const twitter = new SharedButtonTwitter("https://www.youtube.com", ".btn-twitter");
twitter.bind();

const linkedin = new SharedButtonLinkedin("https://www.youtube.com", ".btn-linkedin");
linkedin.bind();

const print = new SharedButtonPrint(".btn-print");
print.bind();
import ShareButton from './SharedButton';

const shareButton = new ShareButton("https://www.youtube.com");
shareButton.bind(".btn-twitter", "twitter");
shareButton.bind(".btn-facebook", "facebook");
shareButton.bind(".btn-linkedin", "linkedin");
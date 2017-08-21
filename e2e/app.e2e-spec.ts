import { ChatFbPage } from './app.po';

describe('chat-fb App', () => {
  let page: ChatFbPage;

  beforeEach(() => {
    page = new ChatFbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

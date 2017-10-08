import { JacobchatPage } from './app.po';

describe('jacobchat App', () => {
  let page: JacobchatPage;

  beforeEach(() => {
    page = new JacobchatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

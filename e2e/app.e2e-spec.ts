import { CasaidealFrontPage } from './app.po';

describe('casaideal-front App', () => {
  let page: CasaidealFrontPage;

  beforeEach(() => {
    page = new CasaidealFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

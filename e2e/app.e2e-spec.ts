import { DanPage } from './app.po';

describe('dan App', () => {
  let page: DanPage;

  beforeEach(() => {
    page = new DanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

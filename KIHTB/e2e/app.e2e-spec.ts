import { KIHTBPage } from './app.po';

describe('kihtb App', function() {
  let page: KIHTBPage;

  beforeEach(() => {
    page = new KIHTBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

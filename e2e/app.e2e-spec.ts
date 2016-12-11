import { GreenLoversPage } from './app.po';

describe('green-lovers App', function() {
  let page: GreenLoversPage;

  beforeEach(() => {
    page = new GreenLoversPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { D3Angular4Page } from './app.po';

describe('d3-angular4 App', () => {
  let page: D3Angular4Page;

  beforeEach(() => {
    page = new D3Angular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

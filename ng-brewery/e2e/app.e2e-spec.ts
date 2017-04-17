import { NgBreweryPage } from './app.po';

describe('ng-brewery App', () => {
  let page: NgBreweryPage;

  beforeEach(() => {
    page = new NgBreweryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

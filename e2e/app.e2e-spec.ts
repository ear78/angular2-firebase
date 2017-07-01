import { Angular2FirebasePage } from './app.po';

describe('angular2-firebase App', () => {
  let page: Angular2FirebasePage;

  beforeEach(() => {
    page = new Angular2FirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

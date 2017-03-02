import { AgencyAppPage } from './app.po';

describe('agency-app App', function() {
  let page: AgencyAppPage;

  beforeEach(() => {
    page = new AgencyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

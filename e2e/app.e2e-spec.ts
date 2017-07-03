import { ClockAdminUiPage } from './app.po';

describe('clock-admin-ui App', () => {
  let page: ClockAdminUiPage;

  beforeEach(() => {
    page = new ClockAdminUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

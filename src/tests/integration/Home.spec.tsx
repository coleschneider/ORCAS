import * as React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Pager } from '../Page';

jest.mock('react-scroll');

describe('Home Page', () => {
  const HomePage = new Pager();

  describe('Resize events', () => {
    beforeEach(() => {
      HomePage.createPage();
    });
    it('The home page displays the header correctly on devices less than 800px', () => {
      HomePage.resize(800);
      HomePage.page.update();
      expect(HomePage.page.find('[test-id="toggle"]').exists()).toBe(true);
    });
    it('The home page displays the header correctly on devices greater than 800px', () => {
      HomePage.resize(801);
      HomePage.page.update();
      expect(HomePage.page.find('[test-id="toggle"]').exists()).toBe(false);
    });
  });
  describe('Mobile Toggle', () => {
    beforeAll(() => {
      HomePage.resize(375);
      HomePage.page.update();
    });

    it('should toggle the navigation when clicked', () => {
      HomePage.page.update();
      expect(
        HomePage.getNav()
          .first()
          .props().pose,
      ).toBe('closed');
      const btn = HomePage.page.find('[test-id="toggle"]');
      btn.simulate('click');
      HomePage.page.update();
      expect(
        HomePage.getNav()
          .first()
          .props().pose,
      ).toBe('open');
    });
  });
});

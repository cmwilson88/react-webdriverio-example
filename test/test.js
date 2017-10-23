const expect = require('chai').expect;

describe('My React Test', function () {
  beforeEach(function() {
    browser.url('./');
  })

  it('should click search', function () {
    browser.click('.searchTab');

    browser.waitForExist('.searchBox');
    browser.addValue('input', 'harry potter')
    browser.keys('Enter')

    let pageHeading = browser.getText('h1');

    expect(pageHeading).to.equal('Found 12 results for Harry Potter');
  })
})

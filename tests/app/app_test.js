Feature('My First Test');

Scenario('test something', ({ I }) => {
  I.amOnPage('http://localhost:5173');
  I.see('App');
});

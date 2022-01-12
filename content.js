
const favorites = [
  'bb-foundations-sandbox',
  'bb-foundations-prod',
  'bb-foundations-pipelines',
];

function sortAccounts(accountsList) {
  const listInstance = accountsList.querySelector('portal-instance-list');
  const className = listInstance.classList[0];
  const accounts = accountsList.querySelectorAll(`div.${className}`);
  accounts.forEach((account) => {
    const nameNode = account.querySelector('div.name');
    const name = nameNode.textContent;
    if (favorites.includes(name)) {
      listInstance.insertBefore(account, listInstance.querySelector('div'));
    }
  });
}

function initialize() {
  const accountsList = document.querySelector('sso-expander');
  if (!accountsList) {
    // If the account list isn't there, expand the first one.
    const account = document.querySelector('portal-application');
    account.click();
    return initialize();
  }
  sortAccounts(accountsList);
}



window.onload = () => {
  // Hacky - just to be safe, wait a few seconds to make sure the page has loaded.
  // TODO: is there an event we could wait on?
  setTimeout(initialize, 2000);
};

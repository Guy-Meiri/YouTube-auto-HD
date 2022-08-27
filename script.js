console.log("hey");

function findElementById() {}
let hasSettingsClicked = false;

const settingsObserver = new MutationObserver((entries) => {
  console.log("observing settings");
  if (hasSettingsClicked) return;
  for (let entry of entries) {
    if (entry.target) {
      console.log("clicking settings!");
      hasSettingsClicked = true;
      entry.target.click();
      break;
    }
  }
});
const settingsBtn = document.getElementsByClassName(
  "ytp-button ytp-settings-button"
)[0];

settingsObserver.observe(settingsBtn, { childList: true, attributes: true });

//==================
let hasQualityClicked = false;
const qualityObserver = new MutationObserver((entries) => {
  console.log("observing quality");
  if (hasQualityClicked) return;
  for (let entry of entries) {
    if (entry.target) {
      console.log("quality:");
      for (let child of entry.target.childNodes) {
        for (let menuItem of child.childNodes) {
          if (menuItem.innerHTML?.includes("Quality")) {
            console.log(menuItem.innerHTML);
            menuItem.click();
          }
        }
      }
      break;
    }
  }
});
const qualityElem = document.getElementsByClassName("ytp-panel-menu")[0];
qualityObserver.observe(qualityElem, { childList: true, attributes: true });

// 'ytp-panel ytp-quality-menu'

console.log("hey");

let hasSettingsClicked = false;
const settingsObserver = new MutationObserver((entries) => {
  console.log("observing");
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
const settingsButton = document.querySelector(".ytp-settings-button");
settingsObserver.observe(settingsBtn, { childList: true, attributes: true });

// settingsButton.click();
// const hasQualityClicked = false;
// const qualityButton = document.querySelector(".ytp-menuitem-label");
// const qualityObserver = new MutationObserver((entries) => {
//   if (hasQualityClicked) return;
//   for (let entry of entries) {
//     // hasQualityClicked = true;
//     // entry.target.firstChild.click();
//     // break;
//     console.log(entry.target);
//   }
// });

// qualityObserver.observe(qualityButton, { childList: true, attributes: true });

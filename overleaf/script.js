function isClickAnywhere(event) {
  const featureAndBenefits = document.getElementById("features-benefits-dropdown");
  const help = document.getElementById("help-dropdown");

  if (event.target === featureAndBenefits || event.target === help) {
    return false;
  } else {
    return true;
  }
}

function hideDropdowns() {
  const featureAndBenefits = document.getElementById("features-benefits-dropdown");
  const help = document.getElementById("help-dropdown");

}

document.body.addEventListener("click", (event) => {
  console.log('is click anywhere: ' + isClickAnywhere(event));
})






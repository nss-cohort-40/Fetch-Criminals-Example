
// TODO: Get reference to select menu
// Fetch criminal data from API at "https://criminals.glassdale.us/criminals"
// Parse the response into JSON format
// quick check to make sure you got the data (console.log)
// Iterate array of criminals, create an option element and add to select menu
// using traditional for loop with innerHTML
// Get reference to element on DOM to put the names when selected
// Create function to add a criminal's name to the DOM in an h2 element
// Add event listener to select menu to listen for a "change" and then call the addCriminalToDOM function
// Create function to clear all criminal names from DOM
// Get reference to "Clear Criminals" button and add event listener which executes clearCriminals function when clicked

const criminalSelect = document.querySelector("#select-criminal")

fetch("https://criminals.glassdale.us/criminals")
  .then(response => response.json())
  .then(criminals => {
    // console.log("criminals data: ", criminals)
    const sortedCriminals = criminals.sort((a, b) => (a.name - b.name) ? 1 : (b.name - a.name) ? -1 : 0)
    console.log('sortedCriminals: ', sortedCriminals);
    for (let i = 0; i < criminals.length; i++) {
      const criminalOption = `<option value="${sortedCriminals[i].name}">${sortedCriminals[i].name}</option>`
      criminalSelect.innerHTML += criminalOption
    }
  });

const outputCriminal = document.getElementById("output-criminal")

function addCriminalToDOM(criminalName) {
  outputCriminal.innerHTML += `<h2>${criminalName}</h2>`
}

criminalSelect.addEventListener("change", (event) => {
  console.log("Event:", event)
  addCriminalToDOM(event.target.value)
})

function clearCriminals() {
  outputCriminal.innerHTML = ""
}

document.getElementById("clear-criminals").addEventListener("click", clearCriminals)




// ? The following code does the same as the above for loop (lines 22 - 25) using different syntax
// forEach array method with createElement and appendChild
// criminals.forEach(criminal => {
// const criminalOption = document.createElement("option")
// criminalOption.value = criminal.id
// criminalOption.innerText = criminal.name
// criminalSelect.appendChild(criminalOption)
// });
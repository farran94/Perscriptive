class Medication { // eslint-disable-line no-unused-vars
  constructor (newId, newItem, newDisc, startDate, endDate) {
    this.id = newId
    this.medName = newItem
    this.medDisc = newDisc
    this.prescriptStart = startDate
	this.prescriptEnd = endDate
  }
}

class Pharmacy { // eslint-disable-line no-unused-vars
  constructor (newId, newName, newDisc, phoneNumber) {
    this.id = newId
    this.pharmName = newName
    this.pharmDisc = newDisc
    this.pharmNumber = phoneNumber
  }
}


class MedicineList { // eslint-disable-line no-unused-vars
	constructor () {
	  this.myMedicine = []
	}
  
	addMed (newMedName, newMedDisc, startDate, endDate) {
		// Checking required input values, giving default values
		if (!newMedName || !newMedDisc){return}
		if (!startDate) {let startDate = Date.now()}
		// if (!endDate) { endDate = startDate + 2592000000}
		const newId = this.numberOfMeds() + 1
		
		// Checking if on list
		if (this.myMedicine.includes((medication) => medication.medName === newMedName)) {return}
		
		// Adding item to list
		const eachMedication = new Medication(newId, newMedName, newMedDisc, startDate, endDate)
		this.myMedicine.push(eachMedication) 
		return
	}

	removeMed () {
		return
	}

	numberOfMeds () {
		return this.myMedicine.length
	}

	allMed () {
		return this.myMedicine
	}

	hideAllButMe (pageId) {
		// Validating inputs
		if (!pageId) { return }

		// Hiding all pages
		var pages = ["login", "home-page", "about-page", "my-medication", "my-pharmacy", "need-assistance", "notification-page"]
		pages.forEach(function(page) {
			document.getElementById(page).style.display = "none"
		})

		// Setting nav bar as active
		var pages = ["home-page-nav", "about-page-nav", "my-medication-nav", "my-pharmacy-nav", "need-assistance-nav", "notification-page-nav"]
		pages.forEach(function(page) {
			document.getElementById(page).classList.remove("active")
		})


		// Making current page visable
		document.getElementById(pageId).style.display = "inline"
		if (pageId === "login") { 
			document.getElementById("hidden-nav").style.display = "none"
		} else {
			document.getElementById("hidden-nav").style.display = "inline"
			// Marking nav as active
			var activePage = pageId + "-nav"
			document.getElementById(activePage).classList.add("active")
		}

		// Making background white
		var greenPages = ["login", "need-assistance"]
		if (greenPages.includes(pageId)) {
			document.body.style.background = "#96D7C6"
		}
		else {
			document.body.style.background = "white"
		}
	}

}

const myMedicineList = new MedicineList()
myMedicineList.hideAllButMe("login")
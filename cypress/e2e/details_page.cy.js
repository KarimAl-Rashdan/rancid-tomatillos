describe('Details Page Test Suite', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/436270")
  })
  it('should display an error for a 500 status code', () => {
    cy
    .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {statusCode: 500})
    .visit("http://localhost:3000/436270")

    .contains("Cannot load movie information. Please try again!")
  })
  it("should display an error message for a 400 status code", () => {
    cy
    .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {statusCode: 400})
    .visit("http://localhost:3000/436270")
    .contains("Cannot load movie information. Please try again!")
  })
  it('should have a NavBar with a header', () => {
    cy
    .get("nav")
    .contains("Rancid Tomatillos")
    // .contains("input")
    .should("be.visible")
    .should("have.length", 1)
    .should("have.css", "font-family")
    .and("match", /serif/)
    .get(".homeBtn").contains("Return to Home")
  })
  it("should be able to navigate back to main view page", () => {
    cy
    .visit("http://localhost:3000/436270")
    .get(".homeBtn")
    .click()
    .url().should("eq", "http://localhost:3000/")
  })
  it("should not display the other movies", () => {
    cy
    .get(".movieContainer").should("not.exist")
    .get(".posterSection").should("be.visible")

  })
  it("should display all selected movie info", () => {
    cy
    .get(".posterSection").should("have.attr", "style", `background-image: url("https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg");`)
    .get(".title").contains("Black Adam")
    .get(".tagline").contains("The world needed a hero. It got Black Adam.")
    .get(".releaseDate").contains("2022-10-19")
    .get(".overview").contains("Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
    .get(".category").contains("Action").contains("Fantasy").contains("Science Fiction")
    .get(".budget").contains(200000000)
    .get(".revenue").contains(384571691)
    .get(".runtime").contains(125)
    .get(".rating").contains(4)
  })
})

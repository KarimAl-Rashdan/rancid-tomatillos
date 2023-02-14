describe('Movie Container Test Suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  })
  it("should display an error for a 500 status code" , () => {
    cy
    .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {statusCode: 500})
    .visit("http://localhost:3000/")
    .contains("Cannot load movies. Please try again!")
  })
  it('should have a NavBar with a header', () => {
    cy
    .get("nav")
    .contains("Rancid Tomatillos")
    .should("be.visible")
    .should("have.length", 1)
    .should("have.css", "font-family")
    .and("match", /serif/)
  })
  it("should see all available movies, with their respective poster image, title, and rating", () => {
    cy
    .get(".movieContainer").children().should("exist")
    .should("have.length", 80)
    .get(".movieImage").should("exist")
    .get(".movieTitle").should("exist")
    .get(".rating").should("exist")
  })
  it("should be able to use forward and back arrows to navigate between pages", () => {
    cy
      .get(".movie")
      .contains("Black Adam")
      .click()
      .url().should("eq", "http://localhost:3000/436270")
      .go("back")
      .url().should("eq", "http://localhost:3000/")
      .go("forward")
      .url().should("eq", "http://localhost:3000/436270")
  })
  it("should be able to click a movie and be routed to the movie info view", () => {
    cy
    .get(".movie")
    .contains("Black Adam")
    .click()
    .url().should("include", "436270")
  })
})

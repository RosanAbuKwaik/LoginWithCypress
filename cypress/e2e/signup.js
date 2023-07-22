/// <reference types="cypress"/>
describe("get random names from list", () => {
  it("get firstname", () => {
    let firstNameList = ["rosan", "kareem", "omar", "mohammed"];
    let lastNameList = ["Abukwaik", "Hammoda", "omari", "maki"];
    let randomFirstname = Math.floor(Math.random() * firstNameList.length); // to get the firstname random between the length num of the array
    let randomLastName = Math.floor(Math.random() * lastNameList.length); // to get random lastname between the length of the lastname list
    console.log(
      firstNameList[randomFirstname] + " " + lastNameList[randomLastName]
    );
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    let randomnumforemail = Math.floor(Math.random() * 5000).toString();
    let emailformat =
      firstNameList[randomFirstname] +
      " ." +
      lastNameList[randomLastName] +
      randomnumforemail +
      "@gmail.com";
    let symobls = "@#$%^*()!$&#";
    let latters = "asdhgfkflmnbvcxzwqetyuioppABEGVDHSJSIWQOEIEWUQTGVSKLMXB";
    let numbers = "1234929218710";
    let passwordList = [];
    Array.from({ length: 3 }, () => {
      // will conatin a list with 3 elements  for example        ['^I1#E4(E9^K0$S1', '(a2!I4$q2#W2%w2', '@S2(z8$E0$K9$T8']

      let element = ""; //empty place 
      Array.from({ length: 5 }, () => {
        element += symobls.charAt(Math.floor(Math.random() * symobls.length)); //random symobls 
        element += latters.charAt(Math.floor(Math.random() * latters.length)); //random latters 
        element += numbers.charAt(Math.floor(Math.random() * numbers.length)); //random numbers 
      });
      passwordList.push(element); // password list will conatin the elements  (latters symobls numbers)
    });
    console.log(passwordList);

    cy.get("#firstname").type(firstNameList[randomFirstname]);
    cy.get("#lastname").type(lastNameList[randomLastName]);
    cy.get("#email_address").type(emailformat);
    cy.get("#password").type(passwordList[0]);
    cy.get('#password-confirmation').type(passwordList[0])
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click({force:true})
    cy.get('.message-success').should("have.text","\nThank you for registering with Main Website Store.\n")
  });
});

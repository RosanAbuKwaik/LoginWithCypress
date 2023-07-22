///<reference types = "cypress"/>

// const { random } = require("cypress/types/lodash");

describe("login page", () => {
  it("testone", () => {
    let EmailtoSignIn;
    function generateRandomEmail() {
      const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
      const randomDomain = domains[Math.floor(Math.random() * domains.length)]; //random domains
      const usernameLength = Math.floor(Math.random() * 10) + 5;
      let username = "";
      const characters = "ABCSSHJSIOWIUPWOISPSUDJPSDUSSIUyytrryiyfrewqdgjhvk";
      for (let i = 0; i < usernameLength; i++) {
        username += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return username + "@" + randomDomain;
    }
    const randomEmail = generateRandomEmail();
    console.log(randomEmail);
    // sign up that did before
    const FirstNameList = ["rosan", "kareem", "mohammed", "Omar"];
    let lastNameList = ["Abukwaik", "Hammoda", "omari", "maki"];

    let randomFirstName = Math.floor(Math.random() * FirstNameList.length);
    let randomLastName = Math.floor(Math.random() * lastNameList.length);
    let passwordList = [];
    let symobls = "@#$%^*()!$&#";
    let latters = "asdhgfkflmnbvcxzwqetyuioppABEGVDHSJSIWQOEIEWUQTGVSKLMXB";
    let numbers = "1234929218710";

    Array.from({ length: 3 }, () => {
      let element = "";
      Array.from({ length: 5 }, () => {
        element += symobls.charAt(Math.floor(Math.random() * symobls.length));
        element += latters.charAt(Math.floor(Math.random() * latters.length));
        element += numbers.charAt(Math.floor(Math.random() * numbers.length));
      });
      passwordList.push(element)
    });
 
  cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");

  cy.get("#firstname").type(FirstNameList[randomFirstName]);
  cy.get("#lastname").type(lastNameList[randomLastName]);
  cy.get("#email_address").type(randomEmail);
  cy.get("#password").type(passwordList[0]);
  cy.get('#password-confirmation').type(passwordList[0])
  cy.get("#form-validate > .actions-toolbar > div.primary > .action").click({
    force: true});
  EmailtoSignIn = randomEmail //emailtosignin used anywhere 
  cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force:true})
  cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click({force:true})
  cy.get('.panel > .header > .authorization-link > a').click({force:true});
  cy.get("div[class='panel header'] li[data-label='or'] a").click({force:true})
  cy.get('#email').type(EmailtoSignIn)
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(passwordList[0])
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click({force:true})

cy.wait(6000)
//   cy.visit("https://magento.softwaretestingboard.com/customer/account/logoutSuccess/")
// cy.wait(5000)
// cy.get('.panel > .header > .authorization-link > a').click({force:true})
// cy.wait(5000);

// cy.get("#email").type(EmailtoSignIn)
});

});
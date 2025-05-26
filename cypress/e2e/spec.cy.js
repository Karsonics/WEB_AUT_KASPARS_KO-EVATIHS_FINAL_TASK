import { PracticeFormPage } from "../pageObjects/practiceformPage";


describe("Practice Form", () => {
  context("Full form submission", () => {
    beforeEach(() => {
      PracticeFormPage.visit();
    });

    it("should fill the form and validate data", () => {
      
      PracticeFormPage.firstnameField().type("Yoruichi");
      PracticeFormPage.lastnameField().type("Simp");
      PracticeFormPage.emailField().type("aaaaaaaaa@gmail.com");
      PracticeFormPage.genderRadio().contains("Male").click();
      PracticeFormPage.mobileField().type("1234567890");
      
      PracticeFormPage.dateOfBirthField().click();
      PracticeFormPage.monthSelect().select("February");
      PracticeFormPage.yearselect().select("1930");
      PracticeFormPage.selectDate(28).click();

      
      PracticeFormPage.subjectsField().type("Economics{enter}");
      PracticeFormPage.hobbiesCheckboxOption().contains("Music").click();
      PracticeFormPage.imageUploadField().selectFile("cypress/files/comrad_alya.jpg");
      
      PracticeFormPage.addressField().type("Soul Society, Seireitei, Rukongai");
      
      PracticeFormPage.stateDropdown().click();
      PracticeFormPage.stateOption("NCR").click();
      PracticeFormPage.cityDropdown().click();
      PracticeFormPage.cityOption("Delhi").click();
      
      PracticeFormPage.submitButton().click();
      

    });
  });
});
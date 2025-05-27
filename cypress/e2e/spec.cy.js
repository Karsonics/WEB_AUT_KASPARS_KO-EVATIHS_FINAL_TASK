import { PracticeFormPage } from "../pageObjects/practiceformPage";
import {PracticeFormValidate} from "../pageObjects/PracticeFormValidate";

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
      
      // Validate the submitted data
      
      PracticeFormValidate.namecheck().should("have.text", "Yoruichi Simp");
      PracticeFormValidate.emailcheck().should("have.text", "aaaaaaaaa@gmail.com");
      PracticeFormValidate.gendercheck().should("have.text","Male");
      PracticeFormValidate.mobilecheck().should("have.text", "1234567890");
      PracticeFormValidate.dobcheck().should("have.text", "28 February,1930");
      PracticeFormValidate.subjectcheck().should("have.text", "Economics");
      PracticeFormValidate.hobbiescheck().should("have.text", "Music");
      PracticeFormValidate.picturecheck().should("have.text", "comrad_alya.jpg");
      PracticeFormValidate.addresscheck().should("have.text", "Soul Society, Seireitei, Rukongai");
      PracticeFormValidate.stateAndcitycheck().should("have.text", "NCR Delhi");






    });
  });
});
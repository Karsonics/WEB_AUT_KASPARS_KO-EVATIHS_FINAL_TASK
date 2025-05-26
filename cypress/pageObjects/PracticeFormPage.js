import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage {
    
    
    
    static firstnameField() {
        return cy.get("#firstName");
    }
    static lastnameField() {
        return cy.get("#lastName");
    }
    static emailField() {
        return cy.get("#userEmail");
    }

    static genderRadio() {
        return cy.get("#genterWrapper")
    }
    
    static mobileField() {
        return cy.get("#userNumber");
    }

    static phoneneNumberField() {
        return cy.get("#userNumber");
    }

    static dateOfBirthField() {
        return cy.get("#dateOfBirthInput");
    }

    static yearselect() {
        return cy.get(".react-datepicker__year-select");
    }
    static monthSelect() {
        return cy.get(".react-datepicker__month-select");
    }

    //i hated doing this :\ specific part 
    static selectDate(day) {
    const dayStr = day.toString().padStart(2, '0'); 
    return cy.get(`.react-datepicker__day--0${dayStr}`) 
      .not('.react-datepicker__day--outside-month');
  }

    static subjectsField() {
        return cy.get("#subjectsInput");
    }

    static hobbiesCheckboxOption() {
        return cy.get(".custom-checkbox");
    }


    static imageUploadField() {
        return cy.get("#uploadPicture");
    }

    static addressField() {
        return cy.get("#currentAddress");
    }

    static stateDropdown() {
    return cy.get('#state'); 
}

  static stateOption(state) {
    return cy.get(".css-11unzgr").contains(state);
  }

  static cityDropdown() {
    return cy.get("#city");
  }

  static cityOption(city) {
    return cy.get(".css-11unzgr").contains(city);
  }



    static submitButton() {
        return cy.get("#submit");
    }


}
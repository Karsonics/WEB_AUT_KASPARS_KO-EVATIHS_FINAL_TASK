export class PracticeFormValidate {

    static namecheck(){
        return cy.get("td").contains("Student Name").next();
    }

    static emailcheck(){
        return cy.get("td").contains("Student Email").next();
    }

    static gendercheck(){
        return cy.get("td").contains("Gender").next();
    }

    static mobilecheck(){
        return cy.get("td").contains("Mobile").next();
    } 

    static dobcheck(){
        return cy.get("td").contains("Date of Birth").next();
    }

    static subjectcheck(){
        return cy.get("td").contains("Subjects").next();
    }


    static hobbiescheck(){
        return cy.get("td").contains("Hobbies").next();
    }


    static picturecheck(){
        return cy.get("td").contains("Picture").next();
    }


    static addresscheck(){
        return cy.get("td").contains("Address").next();
    }

    static stateAndcitycheck(){
        return cy.get("td").contains("State and City").next();
    }





}
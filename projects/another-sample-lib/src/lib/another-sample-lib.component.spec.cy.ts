import { AnotherSampleLibComponent } from "./another-sample-lib.component";
import { mount } from "cypress/angular";

it('uses custom text for the button label', () => {
  mount(AnotherSampleLibComponent)
  cy.get('p').should('contains.text', 'another-sample-lib works!')
})

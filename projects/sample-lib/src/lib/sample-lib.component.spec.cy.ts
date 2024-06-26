import { SampleLibComponent } from "sample-lib";
import { mount } from "cypress/angular";

it('uses custom text for the button label', () => {
  mount(SampleLibComponent)
  cy.get('p').should('contains.text', 'sample-lib works!')
})

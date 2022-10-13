/// <reference types="cypress" />

Cypress.Commands.overwrite(
  "type",
  (originalFn, element, text, options = {}) => {
    if (options.maskLog) {
      options.log = false;
      Cypress.log({
        $el: element,
        name: "type",
        message: "*".repeat(text.length),
      });
    }

    return originalFn(element, text, options);
  }
);

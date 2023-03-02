import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];
const getUrl = (page, limit) => {
  let url =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
  if (page || limit) {
    url += "?";
    if (page) {
      url += "page=" + page;
      if (limit) {
        url += "&";
      }
    }
    if (limit) {
      url += "limit=" + limit;
    }
  }
  return url;
};

const checkProducts = (products) => {
  cy.wait(100);
  products.map((product, index) => {
    cy.get("[data-cy=product-details]")
      .eq(index)
      .should("have.text", product.details);

    cy.get("[data-cy=product-price]").eq(index).contains(product.price);
    cy.get("[data-cy=product-category]")
      .eq(index)
      .should("have.text", product.category);
  });
};
data.map(({ submission_link: link, id }) => {
  describe("RCT-201-B20-E1 Evaluation", () => {
    let acc_score = 1;

    beforeEach(() => {
      cy.visit(link);
    });
    it("checking Basic Structure", () => {
      //for 2 marks
      cy.get("[data-cy=product]").should("exist");
      cy.get("[data-cy=pagination-first-button]").should("exist");
      cy.get("[data-cy=pagination-previous-button]").should("exist");
      cy.get("[data-cy=pagination-limit-select]").should("exist");
      cy.get("[data-cy=pagination-next-button]").should("exist");
      cy.get("[data-cy=pagination-last-button]").should("exist");
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(
      "first and previous button should be disabled on page 1",
     
      () => {
        //for 2 marks
        cy.get("[data-cy=product]").should("exist");
        cy.get("[data-cy=pagination-first-button]").should("exist");
        cy.get("[data-cy=pagination-first-button]").should("be.disabled");
        cy.get("[data-cy=pagination-previous-button]").should("exist");
        cy.get("[data-cy=pagination-previous-button]").should("be.disabled");
        cy.get("[data-cy=product]").should("exist");
        cy.then(() => {
          acc_score += 2;
        });
      }
    );
    it(
      "last and next button should be disabled on last page",
  
      () => {
        //for 2 marks
        cy.get("[data-cy=product]").should("exist");
        let nextBtn = cy.get("[data-cy=pagination-next-button]");
        let lastBtn = cy.get("[data-cy=pagination-last-button]");
        nextBtn.should("exist");
        lastBtn.should("exist");
        lastBtn.click();
        nextBtn.should("be.disabled");
        lastBtn.should("be.disabled");

        cy.then(() => {
          acc_score += 2;
        });
      }
    );
    it(
      "should be able to make a request and get the data successfully on load ",
   
      () => {
        cy.intercept("GET", getUrl(1, 3)).as("getProducts");
        cy.wait("@getProducts").then(({ response }) => {
          // console.log(body);
          checkProducts(response.body.data);
          cy.get("[data-cy=product]").should("have.length", 3);
        });
        cy.then(() => {
          acc_score += 2;
        });
      }
    );

    it(`Should be able to do pagination and first ,previous ,next and last buttons should work
        1. on page loads page 1 data shoulde be rendered
        2. previous and fisrt button should be disabled
        3.onclicking next make a GET request for the next page display the products
        4.onlciking the last button make a GET request to last page and display the products
        5. On last page last and next buttons should be disabled`, () => {
      cy.intercept("GET", getUrl(1, 3)).as("getPage1Products");
      cy.intercept("GET", getUrl(2, 3)).as("getPage2Products");
      cy.intercept("GET", getUrl(6, 3)).as("getLastPageProducts");

      cy.wait("@getPage1Products").then(({ response }) => {
        cy.get("[data-cy=product]").should(
          "have.length",
          response.body.data.length
        );
        checkProducts(response.body.data);
        cy.get("[data-cy=product]").should(
          "have.length",
          response.body.data.length
        );
      });
      cy.then(() => {
        acc_score += 1;
      });
      cy.get("[data-cy=pagination-first-button]").should("be.disabled");
      cy.get("[data-cy=pagination-previous-button]").should("be.disabled");
      cy.get("[data-cy=pagination-next-button]").click();
      cy.wait("@getPage2Products").then(({ response }) => {
        checkProducts(response.body.data);
        cy.get("[data-cy=product]").should(
          "have.length",
          response.body.data.length
        );
      });
      cy.then(() => {
        acc_score += 1;
      });
      cy.get("[data-cy=pagination-previous-button]").click();
      cy.wait("@getPage1Products").then(({ response }) => {
        checkProducts(response.body.data);
        cy.get("[data-cy=product]").should(
          "have.length",
          response.body.data.length
        );
      });
      cy.then(() => {
        acc_score += 1;
      });
      cy.get("[data-cy=pagination-last-button]").click();
      cy.wait("@getLastPageProducts").then(({ response }) => {
        checkProducts(response.body.data);
        cy.get("[data-cy=product]").should(
          "have.length",
          response.body.data.length
        );
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(
      `page limit drop down should work and get the data as per the limit
        1.onload by default get 3 products and display
        2.Pagination component should have a select tag with 3,6 and 9 as options
        3.onselecting 6 as limit make a GET request and display the six products
        4.on selecting 9 a limit make a GET request and display the nine products`,
     
      () => {
        cy.intercept("GET", getUrl(1, 3)).as("getPage1Limit3");
        cy.intercept("GET", getUrl(1, 6)).as("getPage1Limit6");
        cy.intercept("GET", getUrl(1, 9)).as("getPage1Limit9");
        cy.intercept("GET", getUrl(2, 9)).as("getPage2Limit9");

        cy.wait("@getPage1Limit3").then(({ response }) => {
          cy.get("[data-cy=pagination-limit-select]").should("have.value", 3);
          cy.get("[data-cy=product]").should(
            "have.length",
            response.body.data.length
          );
        });
        cy.then(() => {
          acc_score += 1;
        });
        cy.get("[data-cy=pagination-limit-select]").select("6");
        cy.wait("@getPage1Limit6").then(({ response }) => {
          cy.get("[data-cy=pagination-limit-select]").should("have.value", 6);
          cy.get("[data-cy=product]").should(
            "have.length",
            response.body.data.length
          );
        });
        cy.then(() => {
          acc_score += 1;
        });
        cy.get("[data-cy=pagination-limit-select]").select("9");
        cy.wait("@getPage1Limit9").then(({ response }) => {
          cy.get("[data-cy=pagination-limit-select]").should("have.value", 9);
          cy.get("[data-cy=product]").should(
            "have.length",
            response.body.data.length
          );
        });
        cy.then(() => {
          acc_score += 1;
        });
        cy.get("[data-cy=pagination-next-button]").click();
        cy.wait("@getPage2Limit9").then(({ response }) => {
          cy.get("[data-cy=pagination-limit-select]").should("have.value", 9);
          cy.get("[data-cy=product]").should(
            "have.length",
            response.body.data.length
          );
        });
        cy.get("[data-cy=pagination-next-button]").should("be.disabled");

        cy.then(() => {
          acc_score += 1;
        });
      }
    );

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});

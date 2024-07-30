  # Homework: Tax Calculator

Create a Tax Calculator, only focus on the individual (PAYE). The goal of the application is to determine a user's
income tax. Refer to spreadsheet `tax_example_comprehensive_202008_v2` in resources.

## Requirements:

*Note: For Psybergater's you are recreating the tax calculator created in your Angular Finance Application*

### Project Requirements

- Using the HTML, CSS, and JavaScript covered in the course, create an income tax calculator.
    - A standalone calculator is required.
    - Add UI hints to the application, such as input validations messages and toasts etc.
    - Render the tax calculations as a table, as shown in `tax_example_comprehensive_202008_v2`.
    - Make use of good OOP models.
    - Currency should be formatted using thousands separators, e.g., `500,000`, `15,000`.
    - **CHALLENGE:** Adjust the model to factor in a taxpayer who can have many different tax calculations.
- **NO** external libraries or dependencies are to be used. Only vanilla HTML, CSS, and JavaScript.
- Manage the data in the browser session; no API is required.
- The application should have custom CSS styles, making it look neat and professional. Get creative here, as the goal is
  to test your CSS skills.
- Ensure a clean and intuitive user interface with good use of spacing, fonts, and colors.
- Follow a CSS architecture such as BEM (Block, Element, Modifier) for maintainable and scalable styles.
- Implement responsive design to ensure the application works well on different screen sizes.
- Use semantic HTML elements for better accessibility and SEO.

### CSS Resources

- For CSS colors look at [Open Color](https://yeun.github.io/open-color/)
- For icons look at [Hero Icons](https://heroicons.com/)
- CSS architecture look
  at [7-1 architecture](https://openclassrooms.com/en/courses/5625786-produce-maintainable-css-with-sass/5723581-use-the-7-1-pattern-for-a-manageable-codebase)

### Taxable Items

**Income items** required for the tax calculations (Yearly):

- Salary
- Bonuses
- Interest Received - (Total interest received - documents are received (IT3Bs))
- Dividends - (All dividends are typically taxed at 20% at source)
- Total Capital Gains - (Inclusion rate 40%)

**Expense items** required for the tax calculations (Yearly):

- Retirement Funding - (Up to a maximum of 27.5% of your salary (technically it is your non-pensionable salary - include
  CTC + bonuses) up to a maximum of R350,000)
- Travel Allowance

### Happy coding! 😊
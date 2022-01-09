const mjml2html = require("mjml");
const Handlebars = require("handlebars");
const fs = require("fs");

// Define the template which is mjml with handlebars in it
const mjmlStr = `<mjml>
<mj-body>
    <mj-section>
        <mj-column>
            <mj-text font-size="18px">Hello {{name}}, thanks for signing up for the email newsletter!</mj-text>
        </mj-column>
    </mj-section>
</mj-body>
</mjml>`;

// Compile handlebars to put in the dynamic data
const templateDelegate = Handlebars.compile(mjmlStr, {noEscape: true});
handlebarsStr = templateDelegate({ name: "Bilbo" });

// Compile mjml which turns it into html
const htmlStr = mjml2html(handlebarsStr, {validationLevel: "strict"}).html;

// Write the result. Open email.html in a browser to see it
fs.writeFile("./email.html", htmlStr, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("File saved.");
});
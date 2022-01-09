# Simple Email Development Example

This illustrates how to use MJML and Handlebars to create responsive, dynamic emails.

Developing emails is hard. Many email clients, especially Outlook, use old versions of HTML. This means if you want prettier emails than just plain blocks of text, you need nested tables, inline CSS, oh my. 

That's why Mailjet made MJML, a markdown languge that abstracts all the messiness into a few clean elements. But MJML doesn't support dynamic content out of the box, which is pretty limiting if you're developing anything but static emails. 

This repo is a simple setup that shows how to pass dynamic data into an MJML template and get back useful HTML. Have a look at `generate.js`.
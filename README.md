<div align="center">
  <img src="https://github.com/domoinc/domo-node-sdk/blob/master/domo.png?raw=true" width="400" height="400"/>
</div>

# Domo DDX Bricks - Example Apps

### About
DDX Bricks are pre-built objects that allow you to create advanced visualizations and apps and can be customized by simply copying and pasting code.

With DDX Bricks, business users, citizen developers, and full stack developers can quickly iterate, prototype and compose new apps with beautiful and advanced features. You can choose from Bricks available in the Domo Appstore. You can also use DDX Bricks to render a new library you found online — it’s as easy as copy and paste.

### Prerequisites
* A Domo account
* Permission to create an app from the Appstore
* Understanding of how to work with domo datasets (for example how to build a card from a dataset)
* Basic understanding of HTML, CSS and JS are useful to fully customize DDX Bricks
### Example Bricks
* Call External Public API: this brick demonstrates how you can utilize external public APIs in your instance to enrich dashboards (brick uses USGS Earthquake API).

* Texting Utility: this brick leverages the Twilio API to send text messages. User inputs phone number and text body and then clicks send.

* Welcome to Domo: this brick leverages the domo.env global variable to determine user and then display top n dashboards according to user's department.

* HTML Example: this brick demonstrates how you can simply use HTML to create a utility to enrich your dashboard.

### Setup
1. Search for 'DDX Blank' in Domo AppStore. Install app and edit card

2. Copy index.js into 'JavaScript' tab, index.css into 'CSS' tab, and index.html into 'HTML' tab

3. Follow README instructions for the brick you are installing (found in the folder for the brick)

4. Click the 'Run' button to test app
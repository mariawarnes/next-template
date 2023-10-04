const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const { pa11y } = require('@cypress-audit/pa11y');
const fs = require('fs');

module.exports = {
  video: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on('task', {
        lighthouse: lighthouse(lighthouseReport => {
          console.log('---- Writing lighthouse report to disk ----');

          fs.writeFile(
            'lighthouse.html',
            lighthouseReport.report,
            (error: any) => {
              error
                ? console.log(error)
                : console.log('Report created successfully');
            },
          );
        }),
        pa11y: pa11y(console.log.bind(console)),
      });
    },
  },
};

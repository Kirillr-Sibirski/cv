const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Replace with the URL or local file path to your Next.js page
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    // await page.addStyleTag({
    //     content: `
    //         * {
    //             margin: 0;
    //             padding: 0;
    //             box-sizing: border-box;
    //         }

    //         body {
    //             margin: 0;
    //             line-height: 1.5;
            

    //         [style*="margin"] {
    //             margin: 0 !important; /* Override inline styles with large margins */
    //         }
    //     `
    // });

    await page.pdf({
        path: './output/output.pdf',       // Output file path
        format: 'A4',            // Paper format
        printBackground: true,   // Ensures CSS background colors are preserved
    });

    await browser.close();
})();

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2,
    });

    await page.goto('http://localhost:3000/', { 
        waitUntil: 'networkidle0',
        timeout: 30000
    });

    await page.addStyleTag({
        content: `
            @page {
                size: A4;
                margin: 0;
            }
            
            body {
                margin: 0;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            * {
                text-decoration: none !important; /* Removes all underlining */
            }

            @media print {
                .print\:hidden {
                    display: none !important;
                }

                a {
                    text-decoration: none !important;
                    color: inherit !important;
                }

                .print\:inline-flex {
                    display: inline-flex !important;
                    align-items: center !important;
                    gap: 0.25rem !important;
                }
            }
        `
    });

    await page.pdf({
        path: './output/resume.pdf',
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
            top: '15mm',
            right: '15mm',
            bottom: '15mm',
            left: '15mm'
        },
        scale: 0.95,
        displayHeaderFooter: false
    });

    await browser.close();
})();

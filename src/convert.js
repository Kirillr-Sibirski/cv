const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set higher resolution viewport
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2, // Higher resolution
    });

    await page.goto('http://localhost:3000/', { 
        waitUntil: 'networkidle0',
        timeout: 30000 
    });

    // Add print-specific styles
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
                box-sizing: border-box;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            @media print {
                html, body {
                    width: 210mm;
                    height: 297mm;
                }
                
                .print:hidden {
                    display: none !important;
                }
                
                .print\:break-inside-avoid {
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
            }
        `
    });

    await page.pdf({
        path: './output/resume.pdf',
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        // margin: {
        //     top: '20mm',
        //     right: '20mm',
        //     bottom: '20mm',
        //     left: '20mm'
        // },
        scale: 0.98, // Slightly scale down to ensure content fits
        displayHeaderFooter: false
    });

    await browser.close();
})();
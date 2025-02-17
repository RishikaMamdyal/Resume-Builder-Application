import React from 'react';
import { jsPDF } from 'jspdf';

const Image = () => {
    const exportToPdf = () => {
        // Create a new jsPDF instance
        const doc = new jsPDF();

        // Get the content of the current page
        const content = document.getElementById('content-to-export').innerHTML;

        // Add the content to the PDF
        doc.fromHTML(content, 10, 10);

        // Save the PDF
        doc.save('exported-page.pdf');
    };

    return (
        <div>
            <div id="content-to-export">
                <h1>Hello, World!</h1>
                <p>This is the content that will be exported to PDF.</p>
            </div>
            <button onClick={exportToPdf}>Export to PDF</button>
        </div>
    );
};

export default Image;
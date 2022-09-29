console.log("hello")
const submitBtn = document.getElementById("submitBtn");
const { PDFDocument, rgb, degrees } = PDFLib;
/*
    jso[i].ticketId
    jso[i].firstName
    jso[i].lastName
    jso[i].eMail
    jso.length
*/
submitBtn.addEventListener("click", () => {
    /*var arr = ["Pranay Kumar", "Kumar", "reddy"];
    var att = ["Pranay@gmail.com", "Kumar@gmail.com", "reddy@gmail.com"];
    var nu = ["20U02011", "20U02012", "20U02013"];*/
    const arr = ["Pranay Kumar"];
    const att = ["Pranay@gmail.com"];
    const nu = ["20U02011"];
    generatePDF();


    /*if (val.trim() !== "" && userName.checkValidity()) {// console.log(val);generatePDF(val);} else {userName.reportValidity();}*/
});



var generatePDF = async() => {
    var i = 0;
    while (i < jso.length) {
        console.log("loop" + i);
        names = jso[i].firstName + " " + jso[i].lastName;
        email = jso[i].eMail;
        tic = String(jso[i].ticketId);
        const existingPdfBytes = await fetch("Ticket.pdf").then((res) =>
            res.arrayBuffer()
        );
        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        pdfDoc.registerFontkit(fontkit);

        //get font
        const fontBytes = await fetch("GoogleSansMedium.ttf").then((res) =>
            res.arrayBuffer()
        );
        // Embed our custom font in the document
        const TitFont = await pdfDoc.embedFont(fontBytes);
        // Get the first page of the document
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        console.log("d");
        // Draw a string of text diagonally across the first page

        var textSize = 24;
        var yPos = 844;
        var textWidth = TitFont.widthOfTextAtSize(names, textSize);
        var textHeight = TitFont.heightAtSize(textSize);
        if (textWidth > 275) {
            temp = textWidth - (textWidth % 275);
            temp = temp / 275;
            textWidth = 260;
            yPos = yPos + (temp * (textHeight / 3));
        }
        console.log(firstPage.getWidth());

        firstPage.drawText(names, {
            /*x: 180,*/
            x: firstPage.getWidth() / 2 - textWidth / 2,
            y: yPos,
            maxWidth: 275,
            size: textSize,
            font: TitFont,
            //color: rgb(0, 0.49, 0.78)
            //color: rgb(1, 0.4, 0)
            //color: rgb(1, 0.68, 0)
            color: rgb(0, 0.62, 0.207)
        });
        /*AQR Code added*/


        inp = await generateQRCode(tic);
        var jpgImage = await pdfDoc.embedPng(inp);
        firstPage.drawImage(jpgImage, {
                /*x: 222,*/
                x: firstPage.getWidth() / 2 - 75,
                y: 170,
                width: 150, //full width 595.3
                height: 150
            })
            /*Added*/
            // Serialize the PDFDocument to bytes (a Uint8Array)
        var pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
        await saveAs(pdfDataUri, email + ".pdf");
        console.log("h");
        document.getElementById("qrcode").innerHTML = "";
        i++
    }
};

/*const text = 'This text is centered.';
const textSize = 24;
const textWidth = helveticaFont.widthOfTextAtSize(text, textSize);
const textHeight = helveticaFont.heightAtSize(textSize);

page.drawText(text, {
  x: page.getWidth() / 2 - textWidth / 2,
  y: page.getHeight() / 2 - textHeight / 2,
  size: textSize,
  font: helveticaFont,
});*/

var qr;
(function() {
    qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        value: 'null'
    });

})();

function generateQRCode(qrtext) {
    qr.set({
        foreground: "#ECEDEF",
        size: 200,
        background: "#ECEDEF",
        backgroundAlpha: 1,
        foreground: "#000000",
        foregroundAlpha: 1,
        size: 500,
        value: qrtext
    });
    a = document.getElementById("qr-code");
    a = a.toDataURL();
    console.log(a);
    return a;
}
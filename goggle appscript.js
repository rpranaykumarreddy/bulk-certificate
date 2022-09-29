function listFolderContents() {
    var foldername = 'all';
    var folderlisting = 'listing of folder ' + foldername;

    var folders = DriveApp.getFoldersByName(foldername)
    var folder = folders.next();
    var contents = folder.getFiles();

    var ss = SpreadsheetApp.create(folderlisting);
    var sheet = ss.getActiveSheet();
    sheet.appendRow(['name', 'link']);

    var file;
    var name;
    var link;
    var row;
    while (contents.hasNext()) {
        file = contents.next();
        name = file.getName();
        link = file.getUrl();
        sheet.appendRow([name, link]);
    }
};

/* trial-not working properly

function sendMails() {
    var wrkBk = SpreadsheetApp.getActiveSpreadsheet();
    var wrkShtEmailIDs = wrkBk.getSheetByName("Sheet1");
    var wrkShtMessage = wrkBk.getSheetByName("Sheet2");
    var subject = wrkShtMessage.getRange("A2").getValue();
    var message = wrkShtMessage.getRange("B2").getValue();
    var folder = DriveApp.getFoldersByName('all').next();
    for (var i = 2; i <= 5; i++) {
        var fname = wrkShtEmailIDs.getRange("A" + i).getValue();
        var lname = wrkShtEmailIDs.getRange("B" + i).getValue();
        var emailAddress = wrkShtEmailIDs.getRange("C" + i).getValue();
        var fileName = wrkShtEmailIDs.getRange("D" + i).getDisplayValue();
        var file = folder.getFilesByName(fileName);
        var finalmsg = "";
        finalmsg = "Hi" + fname + "" + lname + "," + "\n" + message;
        MailApp.sendEmail(emailAddress.subject.finalmsg, { attachments: [file.next().getAs(MimeType.PDF)] });
    }
}
*/
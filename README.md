
# Bulk Ticket & Certificate Maker & Verifer | Web App

 - Maker: Creates pdfs based on data (object).
 - Verifer: Scan the QR & get full data & Integration of attendance API (optional).
 
## Demo

- [Certificate Verifier](https://rpranaykumarreddy.github.io/bulk-certificate/verifier/)
- [Certificate Maker](https://rpranaykumarreddy.github.io/bulk-certificate/maker/)


## Run Locally

```bash
  git clone rpranaykumarreddy/bulk-certificate
```

### Maker

- Update data.js file to your data.

| Label| Data Used | Type |
| ------------- |:-------------:| -----:|
| ticketId | QR Data | Number |
| firstName | Name as Text | String |
| lastName | Name as Text | String |
| eMail | File Name | String |

- Change your PDF Template file in **[line-33, maker/index.js]**
- Change Position of Text & QRCode in **[line-64<->87, maker/index.js]**
- Change File Name Format in **[line-90, maker/index.js]**

Open index.html in a browser.

#### Verifer

- Add any attendance API in **[line-161, verifer/index.html]**


## Documentation

### Maker 
- [pdf-lib](https://www.npmjs.com/package/pdf-lib)
- [qrious](https://www.npmjs.com/package/qrious)
- [FileSaver](https://github.com/eligrey/FileSaver.js)

### Verifier
- [html5-qrcode](https://www.npmjs.com/package/html5-qrcode)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://pranay.wethinc.in/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rpranaykumarreddy/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/RPKR_Inc)

## Contributing

Contributions are always welcome!

## Feedback

If you have any feedback, please reach out to us at rpranaykumarreddy@gmail.com


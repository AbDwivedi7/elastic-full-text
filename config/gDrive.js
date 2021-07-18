// const {google} = require('googleapis')

import { google } from 'googleapis';
const fs  = require('fs')

const KEYFILE = './static/borneo-320203-82ecb3f8a9bd.json';

const SCOPE = ['https://www.googleapis.com/auth/drive'];

const AUTH = new google.auth.GoogleAuth({
    keyFilename: KEYFILE,
    scopes: SCOPE
});


export { AUTH };

// createAndUploadFile(auth).catch(console.error)

// async function downloadFile(auth){
//     const driveService = google.drive({version: 'v3', auth})
//     var fileId = '1UYs0Xmyk1bQOYgj_539jH5xuVke-48Mg';
//     var dest = fs.createWriteStream('./static/download.pdf');
//     driveService.files.get(
//         {
//           fileId: fileId,
//           alt: "media"
//         },
//         { responseType: "stream" },
//         function(err, { data }) {
//           data
//             .on("end", () => {
//               console.log("Done");
//             })
//             .on("error", err => {
//               console.log("Error during download", err);
//             })
//             .pipe(dest);
//         }
//       );
// }

// downloadFile(auth).catch(console.error)




// driveService.files.get({
//     fileId: fileId,
//     mimeType: 'application/pdf'
// })
// .on('end', function () {
//   console.log('Done');
// })
// .on('error', function (err) {
//   console.log('Error during download', err);
// })
// .pipe(dest);

// const uploadFileAndGetWeblink = async(AUTH)=>{
//     console.log(AUTH)
//     const driveService = google.drive({version: 'v3', AUTH})

//     let fileMetaData = {
//         'name': 'pdftw.pdf',
//         'parents': ['1R7wfxp-IJ-9dskP0RvfwCFfu-tjkefK-']
//     }

//     let media = {
//         MimeType: 'application/pdf',
//         body: fs.createReadStream('./static/pdfone.pdf')
//     }

//     let response =  await driveService.files.create( {
//         resource: fileMetaData,
//         media: media,
//         fields: 'files(name, webViewLink)',
//     },)
//     console.log(response.status);
    
//     metadata = {}
//     switch(response.status){
//         case 200:
//             console.log(response.data.id);
//             //console.log(response.data.webViewLink);
//             metadata["id"] = response.data.id;
//             //metadata["webViewLink"] = response.data.webViewLink;
//     }
//     return metadata
// }

// export {uploadFileAndGetWeblink}
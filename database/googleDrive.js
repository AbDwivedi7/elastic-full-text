// import { AUTH }   from '../config/gDrive';
const fs  = require('fs')
const {google} = require('googleapis')
// const KEYFILE = './static/borneo-320203-82ecb3f8a9bd.json';

// const SCOPE = ['https://www.googleapis.com/auth/drive'];

// const AUTH = new google.auth.GoogleAuth({
//     keyFilename: KEYFILE,
//     scopes: SCOPE
// });


// async function createAndUploadFile(){
//     console.log(AUTH)
//     const driveService = google.drive({version: 'v3', auth: AUTH})

//     let fileMetaData = {
//         'name': 'pdfo.pdf',
//         'parents': ['1R7wfxp-IJ-9dskP0RvfwCFfu-tjkefK-']
//     }

//     let media = {
//         MimeType: 'application/pdf',
//         body: fs.createReadStream('./static/pdfone.pdf')
//     }
    
//     let response =  await driveService.files.create( {
//         resource: fileMetaData,
//         media: media,
//         fields: 'id',
//     },)
//     console.log(response.status);
    
//     switch(response.status){
//         case 200:
//             console.log(response.data.id);
//     }
// }

// createAndUploadFile(AUTH).catch(console.error)

const uploadFileAndGetWeblink = async(AUTH)=>{
    console.log(AUTH)
    const driveService = google.drive({version: 'v3', auth: AUTH})

    let fileMetaData = {
        "role": "reader",
        "type": "anyone",
        'name': 'pdftwo.pdf',
        'parents': ['1R7wfxp-IJ-9dskP0RvfwCFfu-tjkefK-'],
    }

    let media = {
        MimeType: 'application/pdf',
        body: fs.createReadStream('./static/pdfone.pdf')
    }

    let response =  await driveService.files.create( {
        resource: fileMetaData,
        media: media,
        fields: 'id, webViewLink',
    },) 
    const metadata = {}
    switch(response.status){
        case 200:
            console.log(response.data.id);
            console.log(response.data.webViewLink);
            metadata["id"] = response.data.id;
            metadata["webViewLink"] = response.data.webViewLink;
    }

    await driveService.permissions.create({
        fileId: metadata.id,
        requestBody: {
            "role": "reader",
            "type": "anyone",
        }
    })
    return metadata
}

export {uploadFileAndGetWeblink}
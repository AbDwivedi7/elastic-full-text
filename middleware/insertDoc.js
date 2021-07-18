import { textParser } from '../text-extract/pdfToJSON';
import { insertDoc } from '../database/insertTextInElastic';
import { uploadFileAndGetWeblink } from '../database/googleDrive';
import { AUTH }   from '../config/gDrive';

const insert = async ()=>{
    const pdfText = await textParser.getTextFromPDF();
    
    const fileMetaData = await uploadFileAndGetWeblink(AUTH);
    const elasticDoc = {
        docId: fileMetaData.id,
        webViewLink: fileMetaData.webViewLink,
        text: pdfText,
        //name: fileMetaData.name
    }
    // console.log(elasticDoc)
    const inertedDoc = await insertDoc.insertDocInElastic(elasticDoc);
    console.log(inertedDoc)
    return "some"
}

const insertedDoc = {
    insert,
}


export {insertedDoc}
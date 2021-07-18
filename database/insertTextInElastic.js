import { client } from "../config/elasticSearch";

const insertDocInElastic = async (data) => {
    
    await client.index({
        index: 'borneo',
        body: {
            text: data.text,
            webViewLink: data.webViewLink,
            docId: data.docId,
            //name: data.name
        }
      })
    return "some"
};

const insertDoc = {
    insertDocInElastic,
};

export { insertDoc };
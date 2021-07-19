import { client } from "../config/elasticSearch";

const searchDocInElastic = async (data) => {
    const result = await client.search({
        index: 'borneo',
        body: {
          query: {
            match: { text: `${data}` }
          }
        }
    })
    const foundDocs = []
    if(result.statusCode == 200){
      const numberOfhits = result.body.hits.total.value;
      for(let i=0; i<numberOfhits; i++){
          const webLink = result.body.hits.hits[i]._source.webViewLink;
          foundDocs.push(webLink)
      }
    }
    return foundDocs
};

const searchDoc = {
    searchDocInElastic,
};

export { searchDoc };
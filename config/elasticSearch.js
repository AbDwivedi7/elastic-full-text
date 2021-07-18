import { Client } from '@elastic/elasticsearch'
import elasticVariable from '../elasticConfig.json'

const client = new Client({
    cloud:{
        id: elasticVariable.id,
    },
    auth: {
        username: elasticVariable.username,
        password: elasticVariable.password
    }
})

export { client }
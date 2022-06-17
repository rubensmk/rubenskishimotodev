import * as prismic from '@prismicio/client'

const repoName = 'rubenskishimotodev'
const endpoint = prismic.getRepositoryEndpoint(repoName)

export const client = prismic.createClient(endpoint)

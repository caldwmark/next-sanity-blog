import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import pages from './pages'
import resources from './resources'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        post,
        pages,
        resources,
        author,
        category,
        blockContent,
    ]),
})

import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import project from './project'
import design from './design'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ design, project ]),
})

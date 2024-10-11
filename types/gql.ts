import type { GetAllExperiencesQuery, GetAllTechnosQuery } from '.nuxt/gql/default'

// Documentation : https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
type Techno = NonNullable<GetAllTechnosQuery['technos']>[number]
type Experience = NonNullable<GetAllExperiencesQuery['experiences']>[number]

export { Techno, Experience }

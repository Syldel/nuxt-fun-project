import type { GetAllTechnosQuery } from '.nuxt/gql/default'

// Documentation : https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
type Techno = NonNullable<GetAllTechnosQuery['technos']>[number]

export { Techno }

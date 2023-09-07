import type { GetAllFilmsQuery } from '.nuxt/gql/default'

// Documentation : https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
type AllFilms = NonNullable<GetAllFilmsQuery['allFilms']>
type Film = NonNullable<NonNullable<AllFilms['films']>[number]>

export default Film

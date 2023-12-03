const z = require('zod')

const schema = z.object({
    title: z.string({
        invalid_type_error: 'Movie title must be a string',
        required_error: 'Movie title is required'
    }),
    year:z.number().int().min(1888).max(2077), 
    director:z.string(),
    duration:z.number().int().positive(),
    rate:z.number().min(0).max(10).default(0),
    poster:z.string().url(),
    genre:z.array(
        z.enum(['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama']))

})

function validateMovie (object){
    return schema.safeParse(object)
}

function validatePartialMovie (input) {
    return schema.partial().safeParse(input)
}

module.exports =  {
    validateMovie,
    validatePartialMovie
} 
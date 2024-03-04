const zod =  require('zod');

const createUser = zod.object({
    name: zod.string(),
    summary: zod.string(),
    interests: zod.array(zod.string()),
    linkedin: zod.string(), 
    twitter: zod.string()
})

const  updateUser = zod.object({
    id : zod.string(),
    name: zod.string(),
    summary: zod.string(),
    interests: zod.array(zod.string()),
    linkedin: zod.string(),
    twitter: zod.string()
})

module.exports = {
    createUser,
    updateUser
}
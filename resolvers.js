module.exports = {
    Mutation : {
        signUpUser: async (_, { username, email, password }, { Users } ) => {
            const user = await Users.findOne( { username });
            if( user ){
                throw new Error("User already exists")
            }
            const newUser = await new Users( { username, email, password}).save();
            return newUser;
        },
        addPost : async (_, { title, imageUrl, categories, description, creatorId }, { Posts }) => {
            const newPost = await new Posts( { title, imageUrl, categories, description, createdBy:creatorId } ).save();
            return newPost;
        }
    },
    Query : {
        getPost : async ( _, {title} , {Posts} ) => {
            return await Posts.findOne({title})
        },
        getPosts: async (_,args, { Posts }) => {
            return await Posts.find().populate({
                path: 'createdBy',
                model: 'Users'
            });
        }
    }
}
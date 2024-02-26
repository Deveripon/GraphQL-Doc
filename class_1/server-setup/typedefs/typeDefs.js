const typeDefs = `#graphql
    type Books{
        name: String,
        author: String
    }
    type Query{
        books:[Books]
    }
`;

export default typeDefs;


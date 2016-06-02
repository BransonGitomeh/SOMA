var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  // READS
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contact: require("./graphNodes/contact/queries").contact,
      contacts: require("./graphNodes/contact/queries").contacts,
      
      student: require("./graphNodes/student/queries").student,
      students: require("./graphNodes/student/queries").students,
      
      university: require("./graphNodes/university/queries").university,
      universities: require("./graphNodes/university/queries").universities,
      
      course: require("./graphNodes/course/queries").course,
      courses: require("./graphNodes/course/queries").courses

    }
  }),

  // Mutation Create
  mutation: new graphql.GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      // all create mutation types
      create: {
        type: new graphql.GraphQLObjectType({
          name: 'RootCreationType',
          fields: {
            contact: require("./graphNodes/contact/mutations").create,
            student: require("./graphNodes/student/mutations").create,
            university: require("./graphNodes/university/mutations").create,

          }
        }),
        resolve:function(){return false}
      }
      
    }
  })
});

module.exports = schema;
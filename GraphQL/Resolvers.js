import { LabModel } from "../MongoDB Models/Lab.js";

export const resolvers = {
  Query: {
    welcome: () => "Welcome to Avera Graph!",

    showAdmins: () =>
      LabModel.find({})
        .then((doc) => {
          return doc;
        })
        .catch((err) => {
          return {
            code: 400,
            message: err.message,
          };
        }),
  },
  Mutation: {
    createAdmin: async (_, args) => {
      try {
        const file = new LabModel(args.adminData);
        await file.save();
        return {
          code: 200,
          message: "Successfully added Lab Profile!",
        };
      } catch (err) {
        return {
          code: 400,
          message: err.message,
        };
      }
    },
  },
};

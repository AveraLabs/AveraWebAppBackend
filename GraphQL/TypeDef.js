import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar Date

  type Query {
    welcome: String
    showAdmins: [Admin]!
  }

  type location {
    longitude: String
    latitude: String
  }

  type labtest {
    test: String
    cost: String
  }

  type personel {
    name: String
    email: String
    role: String
  }

  type workhourinfo {
    datePeriod: String
    timePeriod: String
  }

  type workhours {
    weekDays: workhourinfo
    weekEnds: workhourinfo
    holidays: workhourinfo
  }

  type Response {
    code: Int
    message: String
  }

  type Admin {
    _id: ID
    name: String
    contact: [String]
    email: String
    workHours: workhours
    personel: [personel]
    labTests: [labtest]
    location: location
    createdAt: Date
    updatedAt: Date
  }

  input coordinates {
    longitude: String
    latitude: String
  }

  input labs {
    test: String
    cost: String
  }

  input personelInfo {
    name: String
    email: String
    role: String
  }

  input hourInfo {
    datePeriod: String
    timePeriod: String
  }

  input workhourInfo {
    weekDays: hourInfo
    weekEnds: hourInfo
    holidays: hourInfo
  }

  input admin {
    name: String!
    contacts: [String!]!
    email: String!
    workHours: workhourInfo!
    personel: [personelInfo]!
    labTests: [labs!]!
    location: coordinates!
  }

  type Mutation {
    createAdmin(adminData: admin): Response
  }
`;

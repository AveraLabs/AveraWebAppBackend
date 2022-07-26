import mongo from "mongoose";

const { model, Schema } = mongo;

const schema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contacts: [
      {
        type: String,
        required: true,
        maxLength: 10,
      },
    ],
    email: {
      type: String,
      required: true,
    },
    workHours: {
      weekDays: {
        datePeriod: String,
        timePeriod: String,
      },
      weekEnds: {
        datePeriod: String,
        timePeriod: String,
      },
      holidays: {
        timePeriod: String,
      },
    },
    personel: [
      {
        name: String,
        email: String,
        role: String,
      },
    ],
    labTests: [{ test: String, cost: String }],
    location: {
      longitude: String,
      latitude: String,
    },
  },
  { timestamps: true }
);

export const LabModel = model("Lab Profiles", schema);

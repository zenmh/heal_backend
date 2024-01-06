const doctorSearchableFields: string[] = [
  "id",
  "name",
  "email",
  "contactNo",
  "branch",
  "speciality",
];

const doctorFilterableFields: string[] = [
  "searchTerm",
  "id",
  "email",
  "contactNo",
  "branch",
  "speciality",
];

const select = {
  id: true,
  name: true,
  email: true,
  password: false,
  contactNo: true,
  image: true,
  experiences: true,
  speciality: true,
  branch: true,
  reviews: true,
  createdAt: true,
  updatedAt: true,
};

export { doctorSearchableFields, doctorFilterableFields, select };

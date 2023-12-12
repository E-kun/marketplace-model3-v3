export const subjects = [
  {
    id: "english_1184",
    name: "English",
    subjectCode: "1184",
  },
  {
    id: "literature_2065",
    name: "Literature in English",
    subjectCode: "2065",
  },
  {
    id: "history_2174",
    name: "History",
    subjectCode: "2174",
  },
  {
    id: "geography_2236",
    name: "Geography",
    subjectCode: "2236",
  },
  {
    id: "humanities_2272",
    name: "Humanities ( Social Studies, Geography)",
    subjectCode: "2272",
  },
  {
    id: "humanities_2273",
    name: "Humanities ( Social Studies, Geography)",
    subjectCode: "2273",
  },
  {
    id: "humanities_2274",
    name: "Humanities ( Social Studies, Literature in English)",
    subjectCode: "2274",
  },
  {
    id: "economics_2286",
    name: "Economics",
    subjectCode: "2286",
  },
  {
    id: "humanities_2287",
    name: "Humanities ( Social Studies, Literature in Chinese)",
    subjectCode: "2287",
  },
  {
    id: "humanities_2288",
    name: "Humanities ( Social Studies, Literature in Malay)",
    subjectCode: "2288",
  },
  {
    id: "humanities_2289",
    name: "Humanities ( Social Studies, Literature in Tamil)",
    subjectCode: "2289",
  },
  {
    id: "drama_2299",
    name: "Drama",
    subjectCode: "2299",
  },
  {
    id: "maths_4048",
    name: "Mathematics",
    subjectCode: "4048",
  },
  {
    id: "additional-maths_4052",
    name: "Additional Mathematics",
    subjectCode: "4052",
  },
  {
    id: "science_5076",
    name: "Science (Physics, Chemistry)",
    subjectCode: "5076",
  },
  {
    id: "science_5077",
    name: "Science (Physics, Biology)",
    subjectCode: "5077",
  },
  {
    id: "science_5078",
    name: "Science (Chemistry, Biology)",
    subjectCode: "5078",
  },
  {
    id: "physics_6091",
    name: "Physics",
    subjectCode: "6091",
  },
  {
    id: "chemistry_6091",
    name: "Chemistry",
    subjectCode: "6091",
  },
  {
    id: "biology_6091",
    name: "Biology",
    subjectCode: "6091",
  },
  {
    id: "art_6123",
    name: "Art",
    subjectCode: "6123",
  },
  {
    id: "higher-art_6124",
    name: "Higher Art",
    subjectCode: "6124",
  },
  {
    id: "design-technology_7059",
    name: "Design & Technology",
    subjectCode: "7059",
  },
  {
    id: "business_7085",
    name: "Business Studies",
    subjectCode: "7085",
  },
  {
    id: "accounting_7087",
    name: "Principles of Accounts",
    subjectCode: "7087",
  },
  {
    id: "computing_7155",
    name: "Computing",
    subjectCode: "7155",
  },
  {
    id: "higher-chinese_1116",
    name: "Higher Chinese",
    subjectCode: "1116",
  },
  {
    id: "chinese-b+_1153",
    name: "Chinese B+",
    subjectCode: "1153",
  },
  {
    id: "chinese_1160",
    name: "Chinese",
    subjectCode: "1160",
  },
  {
    id: "chinese_1166",
    name: "Chinese",
    subjectCode: "1166",
  },
  {
    id: "chinese-literature_2031",
    name: "Literature in Chinese",
    subjectCode: "2031",
  },
  {
    id: "higher-malay_1117",
    name: "Higher Malay",
    subjectCode: "1117",
  },
  {
    id: "malay_1133",
    name: "Malay",
    subjectCode: "1133",
  },
  {
    id: "malay_1148",
    name: "Malay",
    subjectCode: "1148",
  },
  {
    id: "tamil-b+_1151",
    name: "Tamil B+",
    subjectCode: "1151",
  },
  {
    id: "malay-literature_2032",
    name: "Literature in Malay",
    subjectCode: "2032",
  },
  {
    id: "higher-tamil_1147",
    name: "Higher Tamil",
    subjectCode: "1147",
  },
  {
    id: "tamil-b+_1152",
    name: "Tamil B+",
    subjectCode: "1152",
  },
  {
    id: "tamil_1157",
    name: "Tamil",
    subjectCode: "1157",
  },
  {
    id: "tamil-literature_2033",
    name: "Literature in Tamil",
    subjectCode: "2033",
  },
];

export const subjectCodes = subjects.map(
  (subject) => (subject.name = subject.name + " (" + subject.subjectCode + ") ")
);

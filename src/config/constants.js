export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://pms-grab-market.herokuapp.com"
    : "http://localhost:8082";

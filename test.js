import http from "k6/http";
import { sleep } from "k6";

//import { vu } from "./variables.js";

export const options = {
  duration: "30s",
  vus: 50,
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<500"], // 95 percent of response times must be below 500ms
  },
};

export default function () {
  const res = http.get("https://test.k6.io");
  sleep(2);
}

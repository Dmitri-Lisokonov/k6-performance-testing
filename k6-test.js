import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    insecureSkipTLSVerify: true,
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: __ENV.RATE,
            timeUnit: '1s', // iterations per second, i.e. Rate of 1000 = 1000RPS
            duration: '30s', // Total duration of tests
            preAllocatedVUs: 100, // how large the initial pool of VUs would be
            maxVUs: 10000, // if the preAllocatedVUs are not enough, we can initialize more
          },
    },
}

const date = new Date().toLocaleString();

// Name of generated report
const fileName = `\summary-rate(${options.scenarios.constant_request_rate.rate})-duration(${options.scenarios.constant_request_rate.duration}).html`

// Title of generated report
const reportOptions = {
    title: `Rate: ${options.scenarios.constant_request_rate.rate} per ${options.scenarios.constant_request_rate.timeUnit} | Duration: ${options.scenarios.constant_request_rate.duration} | Start: ${date}` 
}

export default function () {
    const url = 'url';
    const params = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const res = http.get(url, params);

    // Add checks here
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
}

export function handleSummary(data) {
    const values = {}
    values[fileName] = htmlReport(data, reportOptions);
    return values
}
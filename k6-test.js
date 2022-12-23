import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    insecureSkipTLSVerify: true,
    scenarios: {
        constant_request_rate: {
            executor: 'constant-vus',
            vus: __ENV.RATE,
            duration: '30s', // Total duration of tests
          },
    },
}

const date = new Date().toLocaleString();

// Name of generated report
const fileName = `\summary-vus(${options.scenarios.constant_request_rate.vus})-duration(${options.scenarios.constant_request_rate.duration}).html`

// Title of generated report
const reportOptions = {
    title: `Rate: ${options.scenarios.constant_request_rate.vus} | Duration: ${options.scenarios.constant_request_rate.duration} | Start: ${date}` 
}

export default function () {
    const url = __ENV.TARGET;
    const params = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const res = http.post(url, params);

    check(res, {
        'is status 200': (r) => r.status === 200,
    });
}

export function handleSummary(data) {
    const values = {}
    values[fileName] = htmlReport(data, reportOptions);
    return values
}
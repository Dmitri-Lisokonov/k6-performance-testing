import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    insecureSkipTLSVerify: true,
    scenarios: {
        PerformanceTests: {
            executor: 'ramping-vus',
            gracefulStop: '10s',
            stages: [
                { target: __ENV.VUS * 0.1, duration: '100' },
                { target: __ENV.VUS * 0.2, duration: '100' },
                { target: __ENV.VUS * 0.3, duration: '100' },
                { target: __ENV.VUS * 0.4, duration: '100' },
                { target: __ENV.VUS * 0.5, duration: '100' },
                { target: __ENV.VUS * 0.6, duration: '100' },
                { target: __ENV.VUS * 0.7, duration: '100' },
                { target: __ENV.VUS * 0.8, duration: '100' },
                { target: __ENV.VUS * 0.9, duration: '100' },
                { target: __ENV.VUS, duration: `${__ENV.DURATION}s` }
            ]
        },
    },
}

const date = new Date().toLocaleString();
const fileName = `\summary-${__ENV.VUS}.html`

const reportOptions = {
    title: `result-${__ENV.VUS}-vus-${__ENV.DURATION}s Date: ` + date
}


export default function () {
    const url = 'url';
    const params = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const res = http.get(url, params);
    check(res, {
        'is status 200': (r) => r.status === 200,
        'is sequential number': (r) => r.body.startsWith('A'),
    });
    sleep(Math.random() * 3);
}

export function handleSummary(data) {
    const values = {}
    values[fileName] = htmlReport(data, reportOptions);
    return values
}
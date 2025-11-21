import { init } from '@plausible-analytics/tracker';

if (typeof window !== "undefined") {
  init({
    domain: "jennypower.ie",
    autoCapturePageviews: true,
  });
}

import type { CaptureDraft, CaptureJob } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

export function createCaptureJobsUrl() {
  return `${API_BASE_URL}/capture/jobs`;
}

export function createCaptureJobUrl(jobId: string) {
  return `${API_BASE_URL}/capture/jobs/${jobId}`;
}

export async function requestCreateCaptureJob(payload: CaptureDraft) {
  return fetch(createCaptureJobsUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    credentials: "include",
  });
}

export async function requestCaptureJobs() {
  return fetch(createCaptureJobsUrl(), {
    credentials: "include",
  });
}

export async function requestCaptureJob(jobId: string) {
  return fetch(createCaptureJobUrl(jobId), {
    credentials: "include",
  });
}

export async function requestDeleteCaptureJob(jobId: string) {
  return fetch(createCaptureJobUrl(jobId), {
    method: "DELETE",
    credentials: "include",
  });
}

export async function readCaptureJobResponse(response: Response): Promise<CaptureJob> {
  return (await response.json()) as CaptureJob;
}

export async function readCaptureJobsResponse(response: Response): Promise<CaptureJob[]> {
  return (await response.json()) as CaptureJob[];
}

export type CaptureStep = "interview" | "voice" | "image";

export type CaptureDraft = {
  interview: {
    selfSummary: string;
    coreValues: string;
    speakingStyle: string;
    keywords: string;
  };
  voice: {
    inputMode: "upload" | "record" | "later";
    sampleFileName: string;
    toneNotes: string;
    deliveryGoal: string;
  };
  image: {
    inputMode: "upload" | "camera" | "later";
    referenceFileName: string;
    visualDirection: string;
    framingNotes: string;
  };
  updatedAt: string | null;
};

export type CaptureCompletion = Record<CaptureStep, boolean>;

export type CaptureLoaderData = {
  draft: CaptureDraft;
  completion: CaptureCompletion;
  progressCount: number;
  nextPath: string;
};

export type CaptureSubmitActionData = {
  error?: string;
};

export type CaptureJob = {
  id: string;
  owner_user_id: string;
  status: string;
  payload: CaptureDraft;
  created_at: string;
  updated_at: string;
};

export type CaptureJobsLoaderData = {
  jobs: CaptureJob[];
  deletedJobId: string | null;
};

export type CaptureJobDetailLoaderData = {
  job: CaptureJob;
  created: boolean;
};

export type CaptureJobActionData = {
  error?: string;
};

export const EMPTY_DRAFT: CaptureDraft = {
  interview: {
    selfSummary: "",
    coreValues: "",
    speakingStyle: "",
    keywords: "",
  },
  voice: {
    inputMode: "later",
    sampleFileName: "",
    toneNotes: "",
    deliveryGoal: "",
  },
  image: {
    inputMode: "later",
    referenceFileName: "",
    visualDirection: "",
    framingNotes: "",
  },
  updatedAt: null,
};

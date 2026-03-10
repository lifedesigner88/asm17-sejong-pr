import { cn } from "@/lib/utils";

import type { CaptureDraft } from "../utils/types";
import { SummaryBlock } from "./summary-block";

export function CapturePayloadSummary({
  className,
  payload,
}: {
  className?: string;
  payload: CaptureDraft;
}) {
  return (
    <div className={cn("grid gap-4 xl:grid-cols-3", className)}>
      <SummaryBlock title="Interview">
        <div>
          <div className="font-medium">Self summary</div>
          <div>{payload.interview.selfSummary || "Not filled yet."}</div>
        </div>
        <div>
          <div className="font-medium">Core values</div>
          <div>{payload.interview.coreValues || "Not filled yet."}</div>
        </div>
        <div>
          <div className="font-medium">Speaking style</div>
          <div>{payload.interview.speakingStyle || "Not filled yet."}</div>
        </div>
        <div>
          <div className="font-medium">Keywords</div>
          <div>{payload.interview.keywords || "No keywords yet."}</div>
        </div>
      </SummaryBlock>

      <SummaryBlock title="Voice">
        <div>
          <div className="font-medium">Input mode</div>
          <div>{payload.voice.inputMode}</div>
        </div>
        <div>
          <div className="font-medium">Sample file</div>
          <div>{payload.voice.sampleFileName || "No file selected."}</div>
        </div>
        <div>
          <div className="font-medium">Tone notes</div>
          <div>{payload.voice.toneNotes || "No notes yet."}</div>
        </div>
        <div>
          <div className="font-medium">Delivery goal</div>
          <div>{payload.voice.deliveryGoal || "No delivery goal yet."}</div>
        </div>
      </SummaryBlock>

      <SummaryBlock title="Image">
        <div>
          <div className="font-medium">Input mode</div>
          <div>{payload.image.inputMode}</div>
        </div>
        <div>
          <div className="font-medium">Reference file</div>
          <div>{payload.image.referenceFileName || "No file selected."}</div>
        </div>
        <div>
          <div className="font-medium">Visual direction</div>
          <div>{payload.image.visualDirection || "No direction yet."}</div>
        </div>
        <div>
          <div className="font-medium">Framing notes</div>
          <div>{payload.image.framingNotes || "No framing notes yet."}</div>
        </div>
      </SummaryBlock>
    </div>
  );
}

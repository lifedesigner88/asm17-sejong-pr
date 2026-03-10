import { Badge } from "@/common/components";

export function CaptureJobStatusBadge({ status }: { status: string }) {
  const variant = status === "completed" ? "success" : status === "failed" ? "warn" : "outline";
  return <Badge variant={variant}>{status}</Badge>;
}

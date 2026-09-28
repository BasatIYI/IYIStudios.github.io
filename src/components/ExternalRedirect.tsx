import { useEffect } from "react";

export function ExternalRedirect({ to, label }: { to: string; label: string }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  return <div className="p-10 text-center">Redirecting to {label}...</div>;
}

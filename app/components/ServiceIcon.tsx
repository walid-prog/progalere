import type { ServiceKey } from "../service-data";

export default function ServiceIcon({ type }: { type: ServiceKey }) {
  if (type === "compta") return <svg viewBox="0 0 96 96" aria-hidden="true"><rect x="16" y="14" width="64" height="68" rx="4"/><path d="M28 30h40M28 44h10m8 0h22M28 58h10m8 0h22M28 70h40"/></svg>;
  if (type === "auto") return <svg viewBox="0 0 96 96" aria-hidden="true"><circle cx="24" cy="48" r="10"/><circle cx="72" cy="24" r="10"/><circle cx="72" cy="72" r="10"/><path d="M34 44l28-15M34 52l28 15"/></svg>;
  if (type === "strategie") return <svg viewBox="0 0 96 96" aria-hidden="true"><path d="M18 76V20M18 76h62"/><path d="M28 64l15-17 13 8 23-29"/><path d="M65 26h14v14"/></svg>;
  return <svg viewBox="0 0 96 96" aria-hidden="true"><path d="M14 33l34-17 34 17-34 17-34-17z"/><path d="M25 42v20c13 10 33 10 46 0V42M82 34v25"/><circle cx="82" cy="64" r="4"/></svg>;
}

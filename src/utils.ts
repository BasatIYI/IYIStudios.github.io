// React 18 does not know the camelCase `fetchPriority` prop; pass the raw attribute instead.
export const highPriority = { fetchpriority: "high" } as Record<string, string>;

export const tabs = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "map",
    label: "Map view",
  },
] as const;

export const defaultValue = tabs[0].value;

// Vancouver
export const center = {
  lat: 49.2827,
  lng: -123.1207,
};

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    dateStyle: "long",
  });
export { slugify, formatDate };

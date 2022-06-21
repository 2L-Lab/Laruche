import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "90nbeyum",
  dataset: "production",
  useCdn: true,
});

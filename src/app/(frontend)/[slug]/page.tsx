import { Any } from "next-sanity";

export default async function Page( { params }: Any ) {

  const { slug } = params;

  return (
    <div>This is our custom page for slug: <strong>{slug}</strong></div>
  );
}

export default function Page({ params }: { params: { slug: string } }) {
    return (
      <div>This is our My custom page {params.slug}</div>
    );
  }
  
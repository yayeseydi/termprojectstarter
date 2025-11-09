import Link from "next/link";

type Props = { params: { id: string } };

export default function BlockShowPage({ params }: Props) {
  const { id } = params;
  const block = { title: "Fetch data from php", code: "fetch().json()" };

  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <Link href="/" style={{ color: "blue" }}>← Back to Home</Link>

      <h1 style={{ marginTop: 20 }}>{block.title}</h1>

      <pre
        style={{
          background: "#f2f2f2",
          padding: 16,
          borderRadius: 8,
          marginTop: 10,
          minHeight: 150,
        }}
      >
        {block.code}
      </pre>

      <div style={{ marginTop: 20 }}>
        <Link
          href={`/blocks/${id}/edit`}
          style={{
            background: "#222",
            color: "white",
            padding: "8px 12px",
            borderRadius: 6,
            marginRight: 10,
          }}
        >
          Edit
        </Link>
        <button
          onClick={() => alert("Delete not wired yet")}
          style={{
            border: "1px solid gray",
            padding: "8px 12px",
            borderRadius: 6,
          }}
        >
          Delete
        </button>
      </div>
    </main>
  );
}

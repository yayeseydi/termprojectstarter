import Link from "next/link";

type Props = { params: { id: string } };

export default function EditBlockPage({ params }: Props) {
  const { id } = params;
  const block = { title: "Fetch data from php", code: "fetch().json()" };

  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <Link href={`/blocks/${id}`} style={{ color: "blue" }}>
        ← Back to Block
      </Link>

      <h1 style={{ marginTop: 20 }}>Edit Block</h1>

      <form
        style={{ marginTop: 20 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Save not wired yet");
        }}
      >
        <input
          type="text"
          defaultValue={block.title}
          placeholder="Block Title"
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
            marginBottom: 12,
          }}
        />
        <textarea
          defaultValue={block.code}
          placeholder="Your code goes here..."
          style={{
            width: "100%",
            minHeight: 150,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
            marginBottom: 12,
          }}
        />
        <button
          type="submit"
          style={{
            background: "#222",
            color: "white",
            padding: "8px 14px",
            borderRadius: 6,
          }}
        >
          Save
        </button>
      </form>
    </main>
  );
}
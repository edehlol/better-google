"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(input);
        router.push(`/search?query=${input}`);
      }}
    >
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </form>
  );
}

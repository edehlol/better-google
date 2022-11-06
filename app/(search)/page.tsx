import Link from "next/link";
import { Result } from "../../types/result";

const fetchRedditResults = async (query: string) => {
  const response = await fetch(`https://www.reddit.com/search.json?q=${query}`);
  const json = await response.json();
  console.log(json);
  return json.data.children as Result[];
};

interface PageProps {
  searchParams: {
    query: string;
  };
}

export default async function Search({ searchParams }: PageProps) {
  const results = await fetchRedditResults(searchParams.query);

  return (
    <div>
      {results?.map((result) => (
        <div key={result.data.id}>
          <p>{result.data.author}</p>
          <Link href={`/search/${result.data.id}`}>{result.data.title}</Link>
        </div>
      ))}
    </div>
  );
}

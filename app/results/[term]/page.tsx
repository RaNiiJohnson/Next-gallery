import Gallery from "@/app/components/Gallery/page";

type Props = {
  params: {
    term: string;
  };
};

export function generateMetadata({ params: { term } }: Props) {
  return {
    title: `Results for ${term}`,
  };
}

export default function searchResult({ params: { term } }: Props) {
  return <Gallery topic={term} />;
}

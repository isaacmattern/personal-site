import Link from "next/link";

interface IPortfolioProject {
  title: string;
  url: string;
  description: string | React.ReactElement | React.ReactElement[];
}

export default function PortfolioProject({
  title,
  url,
  description,
}: IPortfolioProject) {
  return (
    <Link target="_blank" href={url} className="sticky-note">
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

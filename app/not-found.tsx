import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="pageMain notFound">
      <div className="wrap notFound__inner">
        <p className="eyebrow">404</p>
        <h1 className="display3">That page could not be found.</h1>
        <p className="prose muted">
          The page may have moved, or the link may be out of date. Head back to the homepage to
          keep exploring.
        </p>
        <Link className="btn btn--primary" href="/">
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}

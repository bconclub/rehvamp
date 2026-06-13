import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import { Arrow, Leaf } from "../components/Icons";

export default function NotFound() {
  return (
    <PageTransition>
      <Seo
        title="Page Not Found"
        description="The page you're looking for can't be found. Return to the REHVAMP Foundation homepage."
        noindex
      />
      <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <Leaf className="h-12 w-12 text-teal" />
        <p className="mt-6 font-display text-8xl text-teal">404</p>
        <h1 className="mt-2 display-md">Page not found</h1>
        <p className="mt-3 max-w-md text-body">
          The page you're looking for doesn't exist or has moved. Let's get you
          back on track.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back home <Arrow className="h-4 w-4" />
        </Link>
      </section>
    </PageTransition>
  );
}

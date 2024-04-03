import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-6 mb-12">
        <section className="mb-12 w-full md:w-1/2 p-4">
          <a href="https://www.uwlogan.org/indian-lake-tornado-community-response" target="_blank"
            className="block bg-white shadow-md rounded p-6 text-black no-underline"
          >
            <h2 className="text-2xl mb-4">Want to Help?</h2>
            <p>
              Volunteers are needed to provide physical labor, remote phone support, and financial donations. Logan County United Way is coordinating these activities.
            </p>
          </a>
        </section>

        <section className="mb-12 w-full md:w-1/2 p-4">
          <Link
            to="/need-help"
            className="block bg-white shadow-md rounded p-6 text-black no-underline"
          >
            <h2 className="text-2xl mb-4">Need Help?</h2>
            <p>
              Information about resources and requirements for repair,
              reconstruction, and demolition, information on financial aid.
            </p>
          </Link>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl mb-4">Resources</h2>
          <p>
            Links to useful resources for both those who want to help and those
            who need help.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://loganco.nyc3.digitaloceanspaces.com/Ohio-Governor-DeWine-Presidential-Disaster-Declaration-Request-Letter-3-29-2024.pdf" target="_blank" download className="text-blue-500 underline">Declaration of Emergency</a>
            </li>
            <li>
              <a href="https://loganco.nyc3.digitaloceanspaces.com/Private%20Property%20Debris%20Removal%20-%20FEMA%20Guidance.pdf" target="_blank" download className="text-blue-500 underline">FEMA Debris Removal Guidance</a>
            </li>
            <li>
              <a href="https://www.epa.gov/natural-disasters/dealing-debris-and-damaged-buildings" target="_blank" className="text-blue-500 underline">EPA Debris Removal Guidance</a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-6 flex flex-wrap justify-between">
        <section className="mb-12 w-full md:w-1/2 p-4">
          <Link
            to="/want-to-help"
            className="block bg-white shadow-md rounded p-6 text-black no-underline"
          >
            <h2 className="text-2xl mb-4">Want to Help?</h2>
            <p>
              Information about how you can provide physical volunteering,
              remote phone support, or financial support.
            </p>
          </Link>
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
              <a href="/files/Ohio-Governor-DeWine-Presidential-Disaster-Declaration-Request-Letter-3-29-2024.pdf" target="_blank" download className="text-blue-500 hover:underline">Declaration of Emergency</a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;

import React from "react";
import { NavLink } from "../../components/navigation";
import { PageLayout } from "../../components/structure";

export default function Shop() {
  return (
    <PageLayout>
      <div className="flex flex-col space-y-2 items-center bg-red-300">
        <h1>LAUNDRY SERVICES</h1>
        <NavLink to="/login">Login</NavLink>
        <h2>
          From the the service catalog below, please add the services you would
          like us to help with your laundry
        </h2>
      </div>

      <div>
        <h2>Offered Laundy services in the catalog</h2>
      </div>
    </PageLayout>
  );
}

import React from "react";
import { NavLink } from "../../components/navigation";
import { PageLayout } from "../../components/structure";
import useProductCatalog from "../../hooks/use-product-catalog";

export default function Shop() {
  const catalog = useProductCatalog();

  return (
    <PageLayout>
      <div className="mb-4 w-2/3 flex flex-col items-center">
        <h1 className="pt-4">LAUNDRY SERVICES</h1>
      </div>

      <div className="grid grid-cols-3 w-2/3 space-x-8">
        <div className="text-left col-span-1">
          <h2 className="mb-4">Categories</h2>
          <ul className="w-1/2 text-left">
            <li className="rounded-lg text-center hover:text-white hover:bg-blue-400 hover:cursor-pointer">
              <NavLink to="/shop/all">All</NavLink>
            </li>
            <li className="rounded-lg text-center hover:text-white hover:bg-blue-400 hover:cursor-pointer">
              <NavLink to="/shop/shirts">Shirts</NavLink>
            </li>
            <li className="rounded-lg text-center hover:text-white hover:bg-blue-400 hover:cursor-pointer">
              <NavLink to="/shop/trousers">Trousers</NavLink>
            </li>
            <li className="rounded-lg text-center hover:text-white hover:bg-blue-400 hover:cursor-pointer">
              <NavLink to="/shop/suits">Suits</NavLink>
            </li>
            <li className="rounded-lg text-center hover:text-white hover:bg-blue-400 hover:cursor-pointer">
              <NavLink to="/shop/coats">Coats</NavLink>
            </li>
            <li className="rounded-lg text-center hover:text-white hover:bg-blue-400 hover:cursor-pointer">
              <NavLink to="/shop/blankets">Blankets</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h1 className="mb-4">
            We ofer laundry services for the following variety of clothes
          </h1>
          <ul className="grid grid-cols-3">
            {catalog.map((product) => (
              <li className="hover:bg-gray-200 hover:cursor-pointer">
                <img src="#" alt="not available" />
                <div className="flex flex-col">
                  <span>{product.name}</span>
                  <span>{product.description}</span>
                  <span>{product.cost}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
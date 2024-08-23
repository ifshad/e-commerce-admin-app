"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const [productIsExpanded, setProductIsExpanded] = useState(false);
  const [customerIsExpanded, setCustomerIsExpanded] = useState(false);
  const router = useRouter(); 
  const pathname = usePathname();
  console.log(pathname);

  const toggleProductExpand = () => {
    setProductIsExpanded(!productIsExpanded);
  };
  
  const toggleCustomerExpand = () => {
    setCustomerIsExpanded(!customerIsExpanded);
  };

  return (
    <div className="backdrop-blur-lg bg-[#D9D9D9] bg-opacity-[13.5%] min-h-screen w-64 border-r fixed z-50">
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold">E-Commerce</h1>
        <p className="text-sm text-gray-500">Head Office</p>
      </div>
      <nav className="mt-10 px-6">
        <ul>
          <li className="mb-4">
            <Link
              href="/dashboard"
              className={`flex items-center hover:text-purple-500 ${
                pathname === "/dashboard" ? "text-purple-600" : "text-gray-700"
              }`}
            >
              <AiOutlineDashboard className="w-6 h-6 mr-3" />
              Dashboard
            </Link>
          </li>

          <li className="mb-4">
            <div
              onClick={toggleProductExpand}
              className={`flex items-center cursor-pointer hover:text-purple-500 ${
                pathname === "/products" ||
                pathname === "/admin/products" ||
                pathname === "/admin/products/add-product"
                  ? "text-purple-600"
                  : "text-gray-700"
              }`}
            >
              <AiOutlineShoppingCart className="w-6 h-6 mr-3" />
              Products
              <FiChevronDown
                className={`w-4 h-4 ml-auto transition-transform ${
                  productIsExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
            {productIsExpanded && (
              <ul className="ml-8 mt-2">
                <li className="mb-2">
                  <Link
                    href="/products"
                    className={`hover:text-purple-500 ${
                      pathname === "/products"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Product Card
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    href="/admin/products"
                    className={`hover:text-purple-500 ${
                      pathname === "/admin/products"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Product List
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/products/add-product"
                    className={`hover:text-purple-500 ${
                      pathname === "/admin/products/add-product"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Add Product
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mb-4">
            <Link
              href="/admin/orders"
              className={`flex items-center hover:text-purple-500 ${
                pathname === "/admin/orders"
                  ? "text-purple-600"
                  : "text-gray-700"
              }`}
            >
              <FaBoxOpen className="w-6 h-6 mr-3" />
              Orders
            </Link>
          </li>

          <li className="mb-4">
            <div
              onClick={toggleCustomerExpand}
              className={`flex items-center cursor-pointer hover:text-purple-500 ${
                pathname === "/admin/add-customer" ||
                pathname === "/admin/customers"
                  ? "text-purple-600"
                  : "text-gray-700"
              }`}
            >
              <FaUsers className="w-6 h-6 mr-3" />
              Customers
              <FiChevronDown
                className={`w-4 h-4 ml-auto transition-transform ${
                  customerIsExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
            {customerIsExpanded && (
              <ul className="ml-8 mt-2">
                <li className="mb-2">
                  <Link
                    href="/admin/customers"
                    className={`flex items-center hover:text-purple-500 ${
                      pathname === "/admin/customers"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Customers
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    href="/admin/customers/add-customer"
                    className={`flex items-center hover:text-purple-500 ${
                      pathname === "/admin/customers/add-customer"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Add Customer
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

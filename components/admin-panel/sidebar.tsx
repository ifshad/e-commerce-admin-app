"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaBoxOpen,
  FaUsers,
} from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="backdrop-blur-lg bg-[#D9D9D9] bg-opacity-[13.5%] min-h-screen w-64 border-r fixed z-50">
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold">ZARGANZ</h1>
        <p className="text-sm text-gray-500">Head Office</p>
      </div>
      <nav className="mt-10 px-6">
        <ul>
          <li className="mb-4">
            <Link
              href="/dashboard"
              className="flex items-center text-gray-700 hover:text-purple-500"
            >
              <AiOutlineDashboard className="w-6 h-6 mr-3" />
              Dashboard
            </Link>
          </li>

          <li className="mb-4">
            <div
              onClick={toggleExpand}
              className="flex items-center text-gray-700 hover:text-purple-500 cursor-pointer"
            >
              <AiOutlineShoppingCart className="w-6 h-6 mr-3" />
              Products
              <FiChevronDown
                className={`w-4 h-4 ml-auto transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
            {isExpanded && (
              <ul className="ml-8 mt-2">
                <li className="mb-2">
                  <Link
                    href="/products"
                    className="text-gray-700 hover:text-purple-500"
                  >
                    Product Card
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    href="/admin/products"
                    className="text-gray-700 hover:text-purple-500"
                  >
                    Product List
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/products/add-product"
                    className="text-gray-700 hover:text-purple-500"
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
              className="flex items-center text-gray-700 hover:text-purple-500"
            >
              <FaBoxOpen className="w-6 h-6 mr-3" />
              Orders
            </Link>
          </li>

          <li className="mb-4">
            <Link
              href="/admin/customers"
              className="flex items-center text-gray-700 hover:text-purple-500"
            >
              <FaUsers className="w-6 h-6 mr-3" />
              Customers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

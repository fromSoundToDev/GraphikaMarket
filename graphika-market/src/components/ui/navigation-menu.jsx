import { useState } from "react";
import { ChevronDown } from "lucide-react";

function NavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-center bg-white shadow-md px-6 py-2">
      <ul className="flex items-center space-x-4">
        <li className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gray-100 hover:bg-gray-200 transition"
          >
            Menu
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute top-full mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200">
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                  >
                    Option 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                  >
                    Option 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                  >
                    Option 3
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <a href="#" className="text-sm font-medium hover:text-blue-600 transition">
            Lien simple
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;

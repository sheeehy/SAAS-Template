import React from "react";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaLink } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="text-zinc-400 pb-32 select-none text-base right-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-5 gap-0">
          <div>
            <h2 className="text-sm mr-20">2261 Market Street #5039 Dublin, 94114</h2>
            <div className="flex mt-4 gap-5 text-lg">
              <a href="https://remise.ie">
                <button>
                  <FaXTwitter />
                </button>
              </a>
              <a href="https://remise.ie">
                <button>
                  <FaLinkedinIn />
                </button>
              </a>
              <a href="https://remise.ie">
                <button>
                  <FaGithub />
                </button>
              </a>
              <a href="https://remise.ie">
                <button>
                  <FaLink />
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-base mb-5 text-zinc-200">Documentation</h3>
            <ul className="space-y-3 ">
              <li>
                <button>Getting Started</button>
              </li>
              <li>
                <button>API Reference</button>
              </li>
              <li>
                <button>Integrations</button>
              </li>
              <li>
                <button>Examples</button>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-base mb-5 text-zinc-200">Resources</h3>
            <ul className="space-y-3">
              <li>
                {" "}
                <button>Changelog</button>{" "}
              </li>

              <li>
                {" "}
                <button>Pricing</button>{" "}
              </li>

              <li>
                {" "}
                <button>Status</button>{" "}
              </li>

              <li>
                {" "}
                <button>Webhooks</button>{" "}
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-base mb-5 text-zinc-200">Company</h3>
            <ul className="space-y-3">
              <li>
                {" "}
                <button>Blog</button>{" "}
              </li>

              <li>
                {" "}
                <button>Contact</button>{" "}
              </li>

              <li>
                {" "}
                <button>Customers</button>{" "}
              </li>

              <li>
                {" "}
                <button>Brand</button>{" "}
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-base mb-5 text-zinc-200">Legal</h3>
            <ul className="space-y-3">
              <li>
                {" "}
                <button>Acceptable Use</button>{" "}
              </li>

              <li>
                {" "}
                <button>Privacy Policy</button>{" "}
              </li>

              <li>
                {" "}
                <button>Terms of Service</button>{" "}
              </li>

              <li>
                {" "}
                <button>Regulation</button>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

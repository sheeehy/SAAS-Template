// Footer.tsx

import React from "react";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaLink } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className=" text-zinc-400  pb-32 select-none text-base right-0  ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-5 gap-0">
          <div>
            <h2 className="text-sm mr-20">2261 Market Street #5039 Dublin, 94114</h2>
            <div className="flex mt-4 gap-5 text-lg">
              {" "}
              <FaXTwitter /> <FaLinkedinIn /> <FaGithub /> <FaLink />
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-base  mb-5 text-zinc-200">Documentation</h3>
            <ul className="space-y-3">
              <li>Getting Started</li>
              <li>API Reference</li>
              <li>Integrations</li>
              <li>Examples</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-base  mb-5 text-zinc-200">Resources</h3>
            <ul className="space-y-3">
              {" "}
              <li>Changelog</li>
              <li>Pricing</li>
              <li>Status</li>
              <li>Webhooks</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-base  mb-5 text-zinc-200">Company</h3>
            <ul className="space-y-3">
              {" "}
              <li>Blog</li>
              <li>Contact</li>
              <li>Customers</li>
              <li>Brand</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-base  mb-5 text-zinc-200">Legal</h3>
            <ul className="space-y-3">
              {" "}
              <li>Acceptable Use</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Regulation</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

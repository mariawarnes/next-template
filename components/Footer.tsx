import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RxExternalLink } from 'react-icons/rx';
import { companyName, footerLinks } from '@/constants';
import { isExternalLink, slugify } from '@/utils';
const Footer = () => {
  return (
    <footer className="mt-5 w-full justify-center">
      <div className="px-6">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <div className="flex w-full flex-wrap justify-between gap-6 py-6 max-md:flex-col">
            <div className="flex flex-col items-start justify-start gap-6 xl:flex-1">
              <Image
                src="/logo.svg"
                alt={`${companyName} Logo`}
                width={150}
                height={50}
                className="object-contain"
              />
              <p className="opacity-80">
                &copy; {companyName} {new Date().getFullYear()}
                <br />
              </p>
            </div>
            <div className="flex w-full flex-col flex-wrap justify-end gap-8 md:flex-1 md:flex-row lg:inline-flex lg:flex-row">
              {footerLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex max-w-[170px] flex-col gap-3 md:w-[140px]"
                >
                  <h3 className="font-semibold">{link.title}</h3>
                  {link.links.map((item, index) =>
                    isExternalLink(item.url) ? (
                      <>
                        <a
                          key={index}
                      href={item.url}
                      className="opacity-80 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-describedby={`${slugify(item.title)}-hint`}
                    >
                      {item.title}
                          <span
                            aria-label="External Link"
                            role="img"
                            className="ml-1 inline-block"
                          >
                        <RxExternalLink
                          aria-label="External Link"
                          className="ml-1 inline-block"
                        />
                          </span>
                        </a>
                        <span
                          id={`${slugify(item.title)}-hint`}
                          className="sr-only"
                        >
                          (opens in new window)
                        </span>
                      </>
                    ) : (
                      <Link
                        key={index}
                        href={item.url}
                        className="opacity-80 hover:underline"
                      >
                        {item.title}
                    </Link>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <div className="flex flex-wrap items-center justify-between py-6 opacity-80 max-sm:flex-col">
            <p>
              &copy; {companyName} {new Date().getFullYear()}
            </p>
            <div className="flex flex-1 justify-center gap-10 max-sm:mt-4 sm:justify-end">
              <Link className="hover:underline" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="hover:underline" href="/terms-of-use">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

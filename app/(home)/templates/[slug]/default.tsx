import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/app/(home)/components/catalyst/button";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

import { urlForImage } from "@/app/(sanity)/lib/image";
import { PortableText } from "@/app/(sanity)/lib/portabletext";

import { siteConfig } from "@/app/siteConfig";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "../../components/catalyst/description-list";
import Cta from "../../components/Cta";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export default function Template(props: any) {
  const { loading, template } = props;
  const slug = template?.slug;
  if (!loading && !slug) {
    notFound();
  }

  return (
    <>
      {/* Navbar */}
      <div>
        <Button plain href={siteConfig.baseLinks.templates}>
          <ArrowLeftIcon />
          Back to Templates
        </Button>
      </div>

      {/* Page */}
      <div className="mb-64 y-12 sm:py-20">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Template details */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  {/* Author */}
                  <div className="mt-10 lg:mt-0 flex items-center gap-x-1.5 text-zinc-700 dark:text-zinc-400">
                    <p>By</p>
                    <div className="item-center flex -space-x-1 overflow-hidden">
                      <Image
                        className="inline-block size-5 rounded-full ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"
                        src={urlForImage(template.author.image)}
                        alt={template.author.name}
                        width={20}
                        height={20}
                      />
                    </div>
                    <p>{template.author.name}</p>
                  </div>

                  <h1 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                    {template.title}
                  </h1>
                </div>

                <div className="lg:col-span-4 lg:row-end-1 lg:hidden">
                  <Image
                    alt={template.mainImage.alt}
                    src={urlForImage(template.mainImage)}
                    height={611}
                    width={814}
                    className="aspect-[4/3] w-full rounded-lg bg-zinc-100 object-cover"
                  />
                </div>
              </div>

              <p className="mt-6 text-zinc-500 dark:text-zinc-300">
                {template.summary}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 h-11">
                <Button>Deploy</Button>
                <Button outline>View Code</Button>
              </div>

              <div className="mt-8 border-zinc-200">
                <DescriptionList>
                  <DescriptionTerm>Use Case</DescriptionTerm>
                  <DescriptionDetails className="text-right">
                    {template.framework.title}
                  </DescriptionDetails>

                  <DescriptionTerm>Language</DescriptionTerm>
                  <DescriptionDetails className="text-right">
                    {template.framework.title}
                  </DescriptionDetails>

                  <DescriptionTerm>Framework</DescriptionTerm>
                  <DescriptionDetails className="text-right">
                    {template.framework.title}
                  </DescriptionDetails>
                </DescriptionList>
              </div>
            </div>

            {/* Template content */}
            <div className="lg:col-span-4 lg:row-end-1 hidden lg:block">
              <Image
                alt={template.mainImage.alt}
                src={urlForImage(template.mainImage)}
                height={611}
                width={814}
                className="aspect-[4/3] w-full rounded-lg bg-zinc-100 object-cover"
              />
            </div>

            <article className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none prose-headings:font-display prose my-3 overflow-x-auto text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none prose-h1:text-2xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-zinc-900 prose-a:text-zinc-600 dark:text-zinc-300 dark:prose-h1:text-zinc-100 dark:prose-a:text-zinc-400">
              {template.body && <PortableText value={template.body} />}
            </article>
          </div>
        </div>

        <section
          aria-labelledby="related-products-heading"
          className="bg-zinc-100 dark:bg-zinc-900"
        >
          <div className="mx-auto spx-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2
              id="related-products-heading"
              className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
            >
              Related Templates
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-zinc-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-zinc-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-zinc-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </div>
    </>
  );
}

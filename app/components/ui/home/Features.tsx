import { Icon, IconProps } from "@tabler/icons-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

type Feature = {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};

const FeaturesList: React.FC<{ features: Feature[] }> = ({ features }) => (
  <dl className="mt-24 grid grid-cols-4 gap-10">
    {features.map(({ name, description, icon: Icon }) => (
      <div key={name} className="col-span-full sm:col-span-2 lg:col-span-1">
        <div className="w-fit rounded-lg p-2 shadow-md shadow-lime-400/30 ring-1 ring-black/5 dark:shadow-lime-600/30 dark:ring-white/5">
          <Icon
            aria-hidden="true"
            className="size-6 text-lime-600 dark:text-lime-400"
          />
        </div>
        <dt className="mt-6 font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </dt>
        <dd className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </dd>
      </div>
    ))}
  </dl>
);

export default FeaturesList;

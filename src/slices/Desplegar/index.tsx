import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Desplegar`.
 */
export type DesplegarProps = SliceComponentProps<Content.DesplegarSlice>;

/**
 * Component for "Desplegar" Slices.
 */
const Desplegar = ({ slice }: DesplegarProps): JSX.Element => {
  return (
    <Button
      className="text-slate-900 no-underline"
      linkField={slice.primary.visit_link}
      label={slice.primary.visit}
    />
  );
};

export default Desplegar;

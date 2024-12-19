"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../../catalyst/button";
export function ButtonSubmitForm(props: ComponentProps<typeof Button>) {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={pending} type="submit">
      {props.children}
    </Button>
  );
}

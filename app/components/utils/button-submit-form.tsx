"use client";

import React, { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../catalyst/button";

/* A styled submit button that becomes disabled on form submission */
// Important: must be called inside a <form> element to work
export function ButtonSubmitForm(props: ComponentProps<typeof Button>) {
  const { pending } = useFormStatus();

  return (
    <Button {...props} disabled={pending} type="submit">
      {props.children}
    </Button>
  );
}

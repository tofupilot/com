import { useState } from "react";
import { ServerAction } from "../types";

export function useAction(serverAction: ServerAction, onSuccess?: () => void) {
  const [error, setError] = useState("");
  const action = async (formData: FormData) => {
    const result = await serverAction(formData);
    if (result?.error) {
      setError(result.error);
      return;
    }
    setError("");
    if (onSuccess) {
      onSuccess();
    }
  };
  return { action, error };
}

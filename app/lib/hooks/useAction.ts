import { useState } from "react";
import { ServerAction } from "../types";

export function useAction(serverAction: ServerAction, onSuccess?: () => void) {
  const [error, setError] = useState("");
  const action: ServerAction = async (formData) => {
    const result = await serverAction(formData);
    if (result?.error) {
      setError(result.error);
      return;
    }
    setError("");
    onSuccess && onSuccess();
    return result;
  };
  return { action, error };
}

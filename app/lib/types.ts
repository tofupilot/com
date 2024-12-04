export type ServerAction = (
  formData: FormData
) => Promise<{ error: string | undefined } | undefined>;

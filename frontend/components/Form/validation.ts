import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().nonempty("名前は必須です").email("正しいメールでよろしく"),
});

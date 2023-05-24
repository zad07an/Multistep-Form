import * as z from "zod";

export const contactSchema = z.object({
  user_name: z.string().min(3, "The name field cannot be less than 3."),
  user_surname: z.string().min(3, "The surname field cannot be less than 3."),
  user_email: z.string().includes("@", {
    message: "Invalid email address. The email field must contain @.",
  }),
  user_age: z.number().min(12, "You must be at least 18 years old"),
  user_country: z.string().min(3, "The country field cannot be less than 3."),
  user_city: z.string().min(3, "The city field cannot be less than 3."),
  user_address: z.string().min(3, "The address field cannot be less than 3."),
  user_password: z.string().min(5, "The password field cannot be less than 5."),
});

export type FormValues = z.infer<typeof contactSchema>;

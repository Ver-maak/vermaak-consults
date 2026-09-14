import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { serviceOptions } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  organisation: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[0-9+()\-\s]*$/, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Select a service of interest"),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (10+ characters)")
    .max(1500),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thank you — your enquiry has been received.", {
        description: "Our team will get back to you within two working days.",
      });
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" error={errors.fullName} required>
          <input id="fullName" name="fullName" className={fieldClass} placeholder="Jane Nakato" />
        </Field>
        <Field label="Organisation" name="organisation" error={errors.organisation}>
          <input
            id="organisation"
            name="organisation"
            className={fieldClass}
            placeholder="Organisation name"
          />
        </Field>
        <Field label="Email" name="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            placeholder="you@organisation.com"
          />
        </Field>
        <Field label="Phone Number" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            placeholder="+256 700 000 000"
          />
        </Field>
      </div>

      <Field label="Service of Interest" name="service" error={errors.service} required>
        <select id="service" name="service" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" name="message" error={errors.message} required>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={fieldClass}
          placeholder="Tell us about your organisation, the challenge and what success looks like."
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Enquiry"}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

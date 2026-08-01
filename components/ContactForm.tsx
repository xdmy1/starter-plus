"use client";

import { useState } from "react";

import { Icon } from "@/components/Icon";
import type { Common } from "@/content/types";
import { validateEnquiry } from "@/lib/contact";
import { site } from "@/lib/site";

interface Props {
  form: Common["form"];
  /** Submit-button labels live under `cta`, not `form`. */
  cta: Pick<Common["cta"], "send" | "sending">;
  /**
   * "api" when the server can deliver the enquiry itself; "compose" when no
   * mail provider is configured, in which case we hand the message to WhatsApp
   * so it still reaches the workshop.
   */
  mode: "api" | "compose";
}

type FieldName = "name" | "phone" | "car" | "topic" | "message";
type Errors = Partial<Record<FieldName, string>>;

export function ContactForm({ form, cta, mode }: Props) {
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    phone: "",
    car: "",
    topic: form.topicOptions[0] ?? "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (field: FieldName) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const composeWhatsApp = () => {
    const text = [
      values.name,
      values.phone,
      values.car ? `Auto: ${values.car}` : "",
      values.topic,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { ok, errors: found } = validateEnquiry(values);
    if (!ok) {
      setErrors({
        name: found.name ? form.required : undefined,
        phone:
          found.phone === "required"
            ? form.required
            : found.phone === "invalid"
              ? form.invalidPhone
              : undefined,
        message: found.message ? form.required : undefined,
      });
      return;
    }

    if (mode === "compose") {
      composeWhatsApp();
      setState("sent");
      return;
    }

    setState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...values,
          trap: (event.currentTarget.elements.namedItem("trap") as HTMLInputElement)
            ?.value,
        }),
      });

      if (response.ok) {
        setState("sent");
        return;
      }
      // Server can't deliver — don't lose the message, hand it to WhatsApp.
      composeWhatsApp();
      setState("sent");
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className="panel">
        <h2 className="h3">{form.success}</h2>
        <p className="mt-3 text-ink-2">{form.successBody}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={site.primaryPhone.href} className="btn btn-ghost btn-sm">
            <Icon name="phone" size={15} />
            {site.primaryPhone.display}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel" noValidate>
      <h2 className="h3">{form.title}</h2>
      <p className="mt-2.5 text-[0.95rem] text-ink-3">{form.subtitle}</p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label={form.name}
          placeholder={form.namePlaceholder}
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          required
        />
        <Field
          id="phone"
          type="tel"
          label={form.phone}
          placeholder={form.phonePlaceholder}
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
          required
        />
        <Field
          id="car"
          label={form.car}
          placeholder={form.carPlaceholder}
          value={values.car}
          onChange={set("car")}
        />

        <div>
          <label htmlFor="topic" className="field-label">
            {form.topic}
          </label>
          <select
            id="topic"
            name="topic"
            className="field appearance-none"
            value={values.topic}
            onChange={set("topic")}
          >
            {form.topicOptions.map((option) => (
              <option key={option} value={option} className="bg-surface">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="field-label">
          {form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field resize-y"
          placeholder={form.messagePlaceholder}
          value={values.message}
          onChange={set("message")}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <FieldError>{errors.message}</FieldError>}
      </div>

      {/* honeypot */}
      <input
        type="text"
        name="trap"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] size-0 opacity-0"
      />

      <p className="mt-5 text-[0.8rem] text-ink-4">{form.consent}</p>

      {state === "error" && (
        <p className="mt-4 text-[0.88rem] text-[#ff6b6b]">{form.error}</p>
      )}

      <button
        type="submit"
        className="btn btn-accent btn-block mt-6"
        disabled={state === "sending"}
      >
        {state === "sending" ? cta.sending : cta.send}
        {state !== "sending" && <Icon name="arrowRight" size={17} />}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  type = "text",
  required,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
  type?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label} {required && "*"}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="field"
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-[0.8rem] text-[#ff6b6b]">{children}</p>;
}

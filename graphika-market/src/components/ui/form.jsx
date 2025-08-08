import React, { createContext, useContext, useId } from "react";
import { Controller, useFormContext, FormProvider } from "react-hook-form";

const Form = FormProvider;

// --- Contexte pour le champ ---
const FormFieldContext = createContext(null);

const FormField = ({ name, ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller name={name} {...props} />
    </FormFieldContext.Provider>
  );
};

// --- Contexte pour l'item (id) ---
const FormItemContext = createContext(null);

const FormItem = ({ className = "", children, ...props }) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={`space-y-2 ${className}`} {...props}>
        {children}
      </div>
    </FormItemContext.Provider>
  );
};

// --- Hook personnalisé ---
const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField doit être utilisé dans <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext || {};

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-description`,
    formMessageId: `${id}-message`,
    ...fieldState,
  };
};

// --- Label ---
const FormLabel = ({ className = "", children, ...props }) => {
  const { formItemId, error } = useFormField();

  return (
    <label
      htmlFor={formItemId}
      className={`${error ? "text-red-600" : ""} ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

// --- Control (champ de formulaire) ---
const FormControl = ({ children, ...props }) => {
  const { formItemId, formDescriptionId, formMessageId, error } = useFormField();

  return React.cloneElement(children, {
    id: formItemId,
    "aria-describedby": error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId,
    "aria-invalid": !!error,
    ...props,
  });
};

// --- Description ---
const FormDescription = ({ className = "", children, ...props }) => {
  const { formDescriptionId } = useFormField();

  return (
    <p id={formDescriptionId} className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  );
};

// --- Message d'erreur ---
const FormMessage = ({ className = "", children, ...props }) => {
  const { error, formMessageId } = useFormField();
  const content = error?.message || children;

  if (!content) return null;

  return (
    <p id={formMessageId} className={`text-sm text-red-600 ${className}`} {...props}>
      {content}
    </p>
  );
};

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};

import React, { ReactNode } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

export interface FormProps {
  children: ReactNode;
  onSubmit?: (values: LoginFormValues) => Promise<void>;
  onChange?: (values: any) => void;
}

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps extends FormProps {
  onSubmit: (values: LoginFormValues) => Promise<void>;
  children: ReactNode;
  validationSchema?: yup.Schema<any>;
}

export interface FormActions {
  submitForm?: () => Promise<any>;
  resetForm?: () => void;
  values: any;
}

function FormFormik({
  onSubmit,
  children,
  validationSchema,
  onChange,
  ...rest
}: LoginFormProps) {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    if (onChange) {
      onChange({ [fieldName]: value });
    }
  };
  async function submit(values: LoginFormValues) {
    if (onSubmit) {
      await onSubmit(values);
    }
  }

  function renderChildren(actions: FormActions) {
    if (typeof children === "function") {
      return (children as (actions: FormActions) => React.ReactNode)({
        ...actions,
      });
    }
    return children;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submit}
      {...rest}
    >
      {(formikProps) => <Form>{renderChildren(formikProps)}</Form>}
    </Formik>
  );
}

export default FormFormik;

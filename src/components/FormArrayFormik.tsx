import { Button } from 'antd';
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";

export const FormTable2: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };
  const initialValues = {
    table: [],
  };
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {({ values }) => (
        <Form>
          <FieldArray
            name="table"
            render={(arrayHelpers) => (
              <div>
                {values.table.map((table, index) => (
                  <div key={index}>
                    <Field name={`table[${index}].key`} />
                    <Field name={`table.${index}.value`} />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <Button
                  type="dashed"
                  onClick={() => arrayHelpers.push({ key: "", value: "" })}
                >
                  +
                </Button>
              </div>
            )}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

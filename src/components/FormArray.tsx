import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FieldArray, Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import React, { useState } from "react";

export const FormArray: React.FC = () => {
  const [state, setState] = useState();

  const toJson = (values: any) => {
    const result = values.table.reduce(function (r: any, e: any) {
      r[e.key] = e.value;
      return r;
    }, {});
    return result;
  };
  
  const onSubmit = (values: any) => {
    setState(toJson(values));
  };
  
  const initialValues = {
    table: [],
  };
  
  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ values }) => (
          <Form>
            <p>Fields:</p>
            <FieldArray
              name="table"
              render={(arrayHelpers) => (
                <div>
                  {values.table.map((table, index) => (
                    <div key={index} className="FormItems">
                      <Form.Item name={`table[${index}].key`}>
                        <Input name={`table[${index}].key`}></Input>
                      </Form.Item>
                      <Form.Item name={`table.${index}.value`}>
                        <Input name={`table.${index}.value`}></Input>
                      </Form.Item>
                      <DeleteOutlined
                        style={{ fontSize: "20px" }}
                        onClick={() => arrayHelpers.remove(index)}
                      />
                    </div>
                  ))}
                  <Button
                    type="dashed"
                    onClick={() => arrayHelpers.push({ key: "", value: "" })}
                    block={true}
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </div>
              )}
            />
            <SubmitButton type="primary" loading={false}>
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
      <code>
        <sub>{JSON.stringify(state)}</sub>
      </code>
    </>
  );
};

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { FieldArray, Formik } from "formik";
import { Form, Input } from "formik-antd";
import React from "react";

export const FormTable: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log(values.table);
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
                {values.table && values.table.length > 0
                  ? values.table.map((table, index) => {
                      // console.log(values.table);
                      return (
                        <Space
                          key={index}
                          style={{ display: "flex", marginBottom: 8 }}
                          align="start"
                        >
                          <Form.Item name={`table.${index}`}>
                            <Form.Item name={`table.key.${index}`}>
                              <Input name={`table.key.${index}`} />
                            </Form.Item>
                            <Form.Item name={`table.value`}>
                              <Input name={`table.value`} />
                            </Form.Item>
                          </Form.Item>
                          <MinusCircleOutlined
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          />
                        </Space>
                      );
                    })
                  : "No fields"}
                <Button
                  type="dashed"
                  onClick={() => arrayHelpers.insert(1, "")}
                  style={{ width: "60%" }}
                >
                  <PlusOutlined /> Add field
                </Button>

                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};

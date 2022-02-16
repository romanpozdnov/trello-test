import React, { useRef, useCallback } from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import moment from "moment";

import Button from "@mui/material/Button";

import CustomInput from "../../components/CustomInput";

import { useIndexDBRequest } from "../../hooks/useIndexDBRequest";

import API from "../../services/indexDB/api";

import { validationSchema } from "./validation";
import { fields, initialValues } from "./constants";
import { COLLECTIONS } from "../../constants/indexDB";

import styles from "./index.module.scss";

const CreateNewBoard = ({ afterSubmit = () => {} }) => {
  const indexDB = useRef(new API());

  const [onCreateNewBoard, isLoading] = useIndexDBRequest(
    async (values) => {
      return await indexDB.current.createDocument(COLLECTIONS.boards, {
        name: values[fields.boardName],
        updatedAt: moment().unix(),
      });
    },
    [indexDB]
  );

  const submitHandler = useCallback(
    async (values) => {
      try {
        await onCreateNewBoard(values);
        afterSubmit();
      } catch (error) {
        console.error(error);
      }
    },
    [afterSubmit, onCreateNewBoard]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
      validateOnChange={true}
    >
      {({ values, errors, handleChange, handleSubmit, isValid, dirty }) => {
        const isDisableSubmit = isLoading || !isValid || !dirty;

        return (
          <form onSubmit={handleSubmit}>
            <div className={styles.container}>
              <CustomInput
                id={fields.boardName}
                name={fields.boardName}
                value={values[fields.boardName]}
                label="Board name"
                onChange={handleChange}
                errorMessage={errors[fields.boardName]}
              />
              <Button
                type="submit"
                id={styles.submitBtn}
                variant="contained"
                disabled={isDisableSubmit}
              >
                Create
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

CreateNewBoard.propTypes = {
  afterSubmit: PropTypes.func,
};

export default CreateNewBoard;

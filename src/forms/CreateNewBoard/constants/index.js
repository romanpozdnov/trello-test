export const fields = {
  boardName: "boardName",
};

export const initialValues = {
  [fields.boardName]: "",
};

export const errors = {
  [fields.boardName]: {
    required: "Board name is required",
  },
};

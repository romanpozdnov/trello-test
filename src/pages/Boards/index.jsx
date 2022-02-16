import React, { useMemo, useRef, useEffect } from "react";

import GridWrapper from "../../components/GridWrapper";
import CustomModal from "../../components/CustomModal";

import BoardCard from "./components/BoardCard";
import CreateNewBoardButton from "./components/CreateNewBoardButton";

import { useCustomModal } from "../../hooks/useCustomModal";
import { useIndexDBRequest } from "../../hooks/useIndexDBRequest";

import API from "../../services/indexDB/api";

import CreateNewBoard from "../../forms/CreateNewBoard";

import { WIDTHS } from "../../constants/layout";
import { COLLECTIONS, ORDER_TYPES } from "../../constants/indexDB";

import styles from "./index.module.scss";

const Boards = () => {
  const indexDB = useRef(new API());

  const [isOpenModal, { onOpen, onClose }] = useCustomModal();

  const [getBoards, isLoading, boards = []] = useIndexDBRequest(async () => {
    return await indexDB.current.getSortedCollection(
      COLLECTIONS.boards,
      "updatedAt",
      ORDER_TYPES.descending
    );
  }, [indexDB]);

  const boardsList = useMemo(
    () => [
      { id: 0, Component: () => <CreateNewBoardButton onClick={onOpen} /> },
      ...boards.map(({ id, name }) => ({
        id,
        Component: () => <BoardCard title={name} />,
      })),
    ],
    [boards, onOpen]
  );

  useEffect(() => {
    if (isOpenModal) return;
    getBoards();
    //eslint-disable-next-line
  }, [isOpenModal]);

  if (isLoading) return null;

  return (
    <>
      <GridWrapper
        items={boardsList}
        gridItemWidths={{
          [WIDTHS.xs]: 12,
          [WIDTHS.sm]: 6,
          [WIDTHS.md]: 4,
          [WIDTHS.lg]: 4,
          [WIDTHS.xl]: 4,
        }}
        className={styles.wrapper}
      />
      <CustomModal
        title="Create new board"
        isOpen={isOpenModal}
        onClose={onClose}
      >
        <CreateNewBoard afterSubmit={onClose} />
      </CustomModal>
    </>
  );
};

export default Boards;

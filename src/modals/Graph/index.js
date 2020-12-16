import React from "react";
import Modal from "react-modal";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import styles from "./graph.module.scss";

Modal.setAppElement("#root");

export const GraphModal = ({
  handleCloseModal,
  isOpen,
  prognosis,
  minPrognosis,
  maxPrognosis,
}) => {
  const data = [
    {
      name: "День 1",
      min: Math.round(minPrognosis * (Math.random() * (1 - 0.75) + 0.75)),
      max: Math.round(maxPrognosis * (Math.random() * (1 - 0.75) + 0.75)),
      opt: Math.round(prognosis * (Math.random() * (1 - 0.75) + 0.75)),
      amt: 2400,
    },
    {
      name: "День 2",
      min: Math.round(minPrognosis * 2 * (Math.random() * (1 - 0.75) + 0.75)),
      max: Math.round(maxPrognosis * 2 * (Math.random() * (1 - 0.75) + 0.75)),
      opt: Math.round(prognosis * 2 * (Math.random() * (1 - 0.75) + 0.75)),
      amt: 2210,
    },
    {
      name: "День 3",
      min: Math.round(minPrognosis * 3 * (Math.random() * (1 - 0.75) + 0.75)),
      max: Math.round(maxPrognosis * 3 * (Math.random() * (1 - 0.75) + 0.75)),
      opt: Math.round(prognosis * 3 * (Math.random() * (1 - 0.75) + 0.75)),
      amt: 2290,
    },
    {
      name: "День 4",
      min: Math.round(minPrognosis * 4 * (Math.random() * (1 - 0.75) + 0.75)),
      max: Math.round(maxPrognosis * 4 * (Math.random() * (1 - 0.75) + 0.75)),
      opt: Math.round(prognosis * 4 * (Math.random() * (1 - 0.75) + 0.75)),
      amt: 2000,
    },
    {
      name: "День 5",
      min: Math.round(minPrognosis * 5 * (Math.random() * (1 - 0.75) + 0.75)),
      max: Math.round(maxPrognosis * 5 * (Math.random() * (1 - 0.75) + 0.75)),
      opt: Math.round(prognosis * 5 * (Math.random() * (1 - 0.75) + 0.75)),
      amt: 2181,
    },
  ];

  return (
    <Modal onRequestClose={handleCloseModal} isOpen={isOpen}>
      <div className={styles.container}>
        <LineChart
          width={1000}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="max"
            stroke="#ff3333"
          />
          <Line type="monotone" dataKey="min" stroke="#ffff4d" />
          <Line type="monotone" dataKey="opt" stroke="#1aff1a" />
        </LineChart>
      </div>
    </Modal>
  );
};

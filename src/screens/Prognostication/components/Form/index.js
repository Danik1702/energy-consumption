import React from "react";
import { useForm } from "react-hook-form";

import styles from "./form.module.scss";

export const Form = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formItemContainer}>
        <label className={styles.formItemLabel}>Назва підприємства</label>
        <input
          className={styles.formItem}
          ref={register}
          name="name"
          placeholder="Джарилгач.."
        />
      </div>

      <div className={styles.formItemContainer}>
        <label className={styles.formItemLabel}>Тип підприємства</label>
        <select className={styles.formItem} ref={register} name="type">
          <option value="технологічне">Технологічне</option>
          <option value="кон'юктурне">Кон'юктурне</option>
          <option value="маркетингове">Маркетингове</option>
        </select>
      </div>

      <div className={styles.formItemContainer}>
        <label className={styles.formItemLabel}>Кількість цехів(1 - 20)</label>
        <input
          type="range"
          name="departmentCount"
          ref={register}
          min="1"
          max="20"
          defaultValue="1"
        />
      </div>

      <div className={styles.inlineItemsContainer}>
        <div className={styles.inlineFormItemContainer}>
          <label className={styles.formItemLabel}>Кількість машие типу А</label>
          <input
            className={styles.formItem}
            ref={register}
            name="aType"
            placeholder="20..."
          />
        </div>

        <div className={styles.inlineFormItemContainer}>
          <label className={styles.formItemLabel}>Кількість машие типу Б</label>
          <input
            className={styles.formItem}
            ref={register}
            name="bType"
            placeholder="25..."
          />
        </div>
      </div>

      <div className={styles.submitContainer}>
          <input type="submit" className={styles.submitButton} />
        </div>
    </form>
  );
};

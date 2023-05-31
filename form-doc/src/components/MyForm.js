import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const validateName = (value) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = 'Это поле обязательно к заполнению';
  }
  return errorMessage;
};

const validateEmail = (value) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = 'Это поле обязательно к заполнению';
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    errorMessage = 'неверный формат электронной почты';
  }
  return errorMessage;
};

const validatePhone = (value) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = 'Это поле обязательно к заполнению';
  } else if (!/^\d{12}$/.test(value)) {
    errorMessage = 'телефон должен содержать 12 цифр';
  }
  return errorMessage;
};

const MyForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: ''
  };

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='name'>
          <label htmlFor="name">Имя:</label>
          <Field type="text" id="name" name="name" validate={validateName} />
          <ErrorMessage name="name" component="div" />
        </div>

        <div className='email'>
          <label htmlFor="email">Электронная почта:</label>
          <Field type="email" id="email" name="email" validate={validateEmail} />
          <ErrorMessage name="email" component="div" />
        </div>

        <div className='phone'>
          <label htmlFor="phone">Телефон:</label>
          <Field type="tel" id="phone" name="phone" validate={validatePhone} />
          <ErrorMessage name="phone" component="div" />
        </div>

        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default MyForm;

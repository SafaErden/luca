import { object, string } from 'yup';

const questionValidationSchema = () =>
  object().shape({
    title: string()
      .nullable()
      .required("Can't be blank")
      .max(100, 'Maximum 100 characters')
      .min(3, 'Minimum three characters'),
    body: string()
      .nullable()
      .required("Can't be blank")
      .max(400, 'Maximum 400 characters')
      .min(3, 'Minimum three characters'),
  });

export { questionValidationSchema };

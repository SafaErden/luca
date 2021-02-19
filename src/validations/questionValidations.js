import { object, mixed } from 'yup';

const FILE_SIZE = 5 * 1024 * 1024;
const questionValidationSchema = () =>
  object().shape({
    questionImg: mixed()
      .nullable()
      .test('fileSize', "i18n.t('validation.tooLarge')", value => {
        if (!value) {
          return true;
        }
        return value.size < FILE_SIZE;
      }),
  });

export { questionValidationSchema };

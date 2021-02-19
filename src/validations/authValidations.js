import { lazy, string, object } from 'yup';
import api from '../api';

const signUpValidationSchema = () =>
  lazy(() =>
    object().shape({
      username: string()
        .nullable()
        .required("i18n.t('validation.blank')")
        .matches(/^[a-zA-Z0-9_.-]*$/, "i18n.t('validation.invalidType')")
        .min(3, "i18n.t('validation.min3')")
        .test(
          'Unique',
          'This username is taken, please choose another.',
          value =>
            new Promise(resolve => {
              api.post('auth/username', { username: value }).then(res => {
                if (res.data.response === true) {
                  resolve(false);
                }
                resolve(true);
              });
            })
        ),
    })
  );
const signInValidationSchema = () =>
  object().shape({
    username: string()
      .nullable()
      .required("i18n.t('validation.blank')")
      .min(3, "i18n.t('validation.min3')"),
  });

export { signUpValidationSchema, signInValidationSchema };

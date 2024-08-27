import { FC } from "react";
import { useTranslation } from "react-i18next";

const RegisterPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <button>{t("register.title")}</button>
    </div>
  );
};

export default RegisterPage;

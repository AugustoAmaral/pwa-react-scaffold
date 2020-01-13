import PlaceIcon from "@material-ui/icons/Business";
import SettingsIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import SignOutIcon from "@material-ui/icons/ExitToApp";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();
  return [
    {
      title: "Sample",
      disabled: false,
      path: "/",
      canList: true,
      icon: PlaceIcon
    },
    {
      canList: true,
      divider: true
    },
    {
      canList: true,
      type: t("options")
    },
    {
      title: t("settings"),
      path: "/settings",
      disabled: false,
      canList: false,
      icon: SettingsIcon
    },
    {
      title: t("signOut"),
      disabled: true,
      canList: true,
      icon: SignOutIcon,
      customOnClick: () => alert("logoff")
    }
  ];
};

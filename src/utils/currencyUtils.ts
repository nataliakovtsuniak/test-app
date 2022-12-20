import { ReactComponent as UsdIcon } from "../components/icons/usd.svg";
import { ReactComponent as EurIcon } from "../components/icons/eur.svg";
import { ReactComponent as AudIcon } from "../components/icons/aud.svg";
import { ReactComponent as GbrIcon } from "../components/icons/gbr.svg";
import { ReactComponent as CadIcon } from "../components/icons/cad.svg";

export const currencyMap = {
  usd: {
    value: "usd",
    label: "USD",
    icon: UsdIcon,
    rate: 0.39,
  },
  eur: {
    value: "eur",
    label: "EUR",
    icon: EurIcon,
    rate: 0.37,
  },
  aud: {
    value: "aud",
    label: "AUD",
    icon: AudIcon,
    rate: 0.59,
  },
  gbr: {
    value: "gbr",
    label: "GBR",
    icon: GbrIcon,
    rate: 0.32,
  },
  cad: {
    value: "cad",
    label: "CAD",
    icon: CadIcon,
    rate: 0.53,
  },
};

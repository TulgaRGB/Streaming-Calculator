import * as React from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useFetchData } from "../../hooks/UseFetchData";
import {
  Currency,
  CurrencySymbol,
  itemCurrencyActive,
} from "../../../atoms/atom";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { useLocalStorage } from "../../hooks/UseLocalStorage";
import mock from "../../mock.json";
import styles from "./CurrencyConverter.module.css";

export function CurrencyConverter(): React.ReactElement {
  const [activeCurrency, setActiveCurrency] =
    useRecoilState(itemCurrencyActive);
  const [activeCurrencyLocalStorage, setActiveCurrencyLocalStorage] =
    useLocalStorage("currency", { name: "USD", rate: 1, symbol: "$" });
  const { data } = useFetchData(
    "https://v6.exchangerate-api.com/v6/64d5643bf5ffa917c338ba01/latest/USD"
  );
  const [, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveCurrency(activeCurrencyLocalStorage);
  }, [setActiveCurrency, activeCurrencyLocalStorage]);

  function getRate(name: Currency) {
    if (data === null) {
      return mock["conversion_rates"][name];
    }
    return data["conversion_rates"][name] ?? mock["conversion_rates"][name];
  }

  function handleSetCurrency(name: Currency, symbol: CurrencySymbol): void {
    const rate = getRate(name);
    setActiveCurrency({ name, rate, symbol });
    setActiveCurrencyLocalStorage({ name, rate, symbol });
    setIsOpen(false);
  }

  return (
    <div className={styles.wrapper}>
      <ToggleButton
        onClick={() => handleSetCurrency("USD", "$")}
        label="USD"
        isActive={activeCurrency.name === "USD"}
      />
      <ToggleButton
        onClick={() => handleSetCurrency("GBP", "£")}
        label="GBP"
        isActive={activeCurrency.name === "GBP"}
      />
      <ToggleButton
        onClick={() => handleSetCurrency("EUR", "€")}
        label="EUR"
        isActive={activeCurrency.name === "EUR"}
      />
    </div>
  );
}

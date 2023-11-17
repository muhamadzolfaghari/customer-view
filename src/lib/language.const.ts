const LANGUGAES: Record<
  "age" | "refreshPage" | "someErrorOccurred" | "dataIsLoading",
  { en: string; de: string }
> = {
  age: {
    en: "age",
    de: "alter",
  },
  refreshPage: {
    en: "Refresh Page",
    de: "Seite neu laden",
  },
  someErrorOccurred: {
    en: "Some error has occurred",
    de: "Es ist ein Fehler aufgetreten",
  },
  dataIsLoading: {
    en: "Data is loading...",
    de: "Daten werden geladen…",
  },
};

export default LANGUGAES;

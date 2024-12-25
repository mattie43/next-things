import useSWR from "swr";

export default function useLocalStorage(key: string, initialValue: any) {
  const fetcher = (arg: string) => {
    return new Promise((resolve) => {
      const item = localStorage.getItem(arg);
      if (item) {
        resolve(JSON.parse(item));
      } else {
        localStorage.setItem(arg, JSON.stringify(initialValue));
        resolve(initialValue);
      }
    });
  };

  const { data, isLoading, mutate } = useSWR<any>(key, fetcher);

  const setData = (value: any) => {
    if (typeof value === "function") {
      mutate((currentData: any) => {
        const newValue = value(currentData);
        localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      mutate();
    }
  };

  return { data, setData, isLoading };
}

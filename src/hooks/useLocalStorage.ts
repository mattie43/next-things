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

  const { data, mutate } = useSWR<any>(key, fetcher);

  const setData = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    mutate();
  };

  const updateData = (value: any) => {
    if (!Array.isArray(data)) {
      return console.error("Data is not an array, cannot update");
    }

    let newData = [...data];
    const found = newData?.includes?.(value);
    if (found) {
      newData = newData.filter((d) => d !== value);
    } else {
      newData = [...newData, value];
    }
    localStorage.setItem(key, JSON.stringify(newData));
    mutate();
  };

  return { data, setData, updateData };
}

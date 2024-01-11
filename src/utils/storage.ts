export interface LocalStorage {
  cities?: string[];
}

export function setStoredCities(cities: string[]): Promise<void> {
  const vals: LocalStorage = {
    cities,
  };
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(
      {
        vals,
      },
      () => {
        resolve();
      }
    );
  });
}

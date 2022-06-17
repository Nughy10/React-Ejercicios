const useLocalStorage = () => {
  const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }

  const setToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeItem = (key) => {
    localStorage.removeItem(key)
  }

  return {
    get: getFromStorage,
    set: setToStorage,
    remove: removeItem,
  }

  // Si se devolviese un array
  // return [getFromStorage, setToStorage, removeItem]
  // en el compoente haríais ->
  // const [get, set, remove] = useLocalStorage();
};

export default useLocalStorage;

// Tal como está este hook se puede usar así en cualquier componente;
// const storage = useLocalStorage()
// const {get, set, remove} = useLocalStorage();

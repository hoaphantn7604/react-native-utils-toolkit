const useArray = {
  excludeDuplicate: (arr1: any[], arr2: any[]) => {
    if (arr1.length > arr2.length) {
      return arr1.filter(item => !arr2.includes(item));
    } else {
      return arr2.filter(item => !arr1.includes(item));
    }
  }
};

export default useArray;
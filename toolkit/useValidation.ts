const useValidation = {
  validateEmail: (str: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
  },
  validateUsername: (str: string) => {
    const re = /^[a-zA-Z0-9-]{6,12}$/;
    return re.test(str);
  },
  validatePassword: (str: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return re.test(str);
  },
  validateUppercase: (str: string) => {
    const re = /^[A-Z]/g;
    return re.test(str);
  },
  validateLowercase: (str: string) => {
    const re = /[a-z]/g;
    return re.test(str);
  },
  validateSpecial: (str: string) => {
    const re = /^(?=.*[@$!%*?&])[0-9A-Za-z\d@$!%*?&]{0,}$/;
    return re.test(str);
  },
  validateString: (value: any) => {
    return typeof value === 'string';
  },
  validateNumer: (value: any) => {
    return typeof value === 'number';
  },
  validateObject: (value: any) => {
    return typeof value === 'object';
  },
  validateArray: (value: any) => {
    return Array.isArray(value);
  },
  isRequired: (value: any) => {
    if (value) {
      if (typeof value === 'object') {
        return Object.keys(value).length > 0;
      }
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return true;
    }
    return false;
  },
  validateConsecutiveNumber: (arr: any[]) => {
    const differenceAry = arr.slice(1).map((n: any, i: number) => {
      return n - arr[i];
    });
    const isDifference = differenceAry.every(value => value === 1);

    return isDifference;
  },
  validateSameValue: (arr: string[]) => {
    return arr.filter((item, index) => arr.indexOf(item) !== index).length === arr.length - 1;
  }
}
export default useValidation;

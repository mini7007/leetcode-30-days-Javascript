function expect(val) {
    return {
      toBe: function (val2) {
        if (val === val2) {
          return true;
        }
        throw 'Not Equal';
      },
      notToBe: function (val2) {
        if (val !== val2) {
          return true;
        }
        throw 'Equal';
      },
    };
  }
  
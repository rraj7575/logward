export const operators = {
  generic: {
    name: 'Common / Generic',
    id: 'operator_1',
    ops: {
      ex: {
        name: 'Exists',
        leftOperands: 1,
        rightOperands: 0,
      },
      nex: {
        name: 'Does Not Exists',
        leftOperands: 1,
        rightOperands: 0,
      },
      isNull: {
        name: 'Is Null',
        leftOperands: 1,
        rightOperands: 0,
      },
      notNull: {
        name: 'Not Null',
        leftOperands: 1,
        rightOperands: 0,
      },
    },
  },
  numeric: {
    name: 'Numeric Ops',
    id: 'operator_2',
    ops: {
      bet: {
        name: 'Between',
        leftOperands: 1,
        rightOperands: 2,
      },
      nbet: {
        name: 'Not Between',
        leftOperands: 1,
        rightOperands: 2,
      },
      eq: {
        name: 'Equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      neq: {
        name: 'Not Equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      gt: {
        name: 'Greater than',
        leftOperands: 1,
        rightOperands: 1,
      },
      lt: {
        name: 'Less than',
        leftOperands: 1,
        rightOperands: 1,
      },
      gte: {
        name: 'Greater than or equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      lte: {
        name: 'Less than or equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      even: {
        name: 'Is Even',
        leftOperands: 1,
        rightOperands: 0,
      },
      odd: {
        name: 'Is Odd',
        leftOperands: 1,
        rightOperands: 0,
      },
    },
  },
  string: {
    name: 'String Ops',
    id: 'operator_3',
    ops: {
      eq: {
        name: 'Equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      neq: {
        name: 'Not Equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      contains: {
        name: 'Contains',
        leftOperands: 1,
        rightOperands: 1,
      },
      notContains: {
        name: 'Does Not Contains',
        leftOperands: 1,
        rightOperands: 1,
      },
      sw: {
        name: 'Starts With',
        leftOperands: 1,
        rightOperands: 1,
      },
      nsw: {
        name: 'Does Not Starts With',
        leftOperands: 1,
        rightOperands: 1,
      },
      ew: {
        name: 'Ends With',
        leftOperands: 1,
        rightOperands: 1,
      },
      new: {
        name: 'Does Not Ends With',
        leftOperands: 1,
        rightOperands: 1,
      },
    },
  },
  date: {
    name: 'Date Ops',
    id: 'operator_4',
    ops: {
      bet: {
        name: 'Between',
        leftOperands: 1,
        rightOperands: 2,
      },
      nbet: {
        name: 'Not Between',
        leftOperands: 1,
        rightOperands: 2,
      },
      eq: {
        name: 'Equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      neq: {
        name: 'Not Equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      gt: {
        name: 'Greater than',
        leftOperands: 1,
        rightOperands: 1,
      },
      lt: {
        name: 'Less than',
        leftOperands: 1,
        rightOperands: 1,
      },
      gte: {
        name: 'Greater than or equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      lte: {
        name: 'Less than or equals',
        leftOperands: 1,
        rightOperands: 1,
      },
    },
  },
  boolean: {
    name: 'Boolean',
    id: 'operator_5',
    ops: {
      t: {
        name: 'Is True',
        leftOperands: 1,
        rightOperands: 0,
      },
      f: {
        name: 'Is False',
        leftOperands: 1,
        rightOperands: 0,
      },
    },
  },
  dateTime: {
    name: 'DateTime Ops',
    id: 'operator_6',
    ops: {
      bet: {
        name: 'Between',
        leftOperands: 1,
        rightOperands: 2,
      },
      nbet: {
        name: 'Not Between',
        leftOperands: 1,
        rightOperands: 2,
      },
      eq: {
        name: 'Equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      neq: {
        name: 'Not Equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      gt: {
        name: 'Greater than',
        leftOperands: 1,
        rightOperands: 1,
      },
      lt: {
        name: 'Less than',
        leftOperands: 1,
        rightOperands: 1,
      },
      gte: {
        name: 'Greater than or equals',
        leftOperands: 1,
        rightOperands: 1,
      },
      lte: {
        name: 'Less than or equals',
        leftOperands: 1,
        rightOperands: 1,
      },
    },
  },
};

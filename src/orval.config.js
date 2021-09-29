const ORVAL_DIR = "./api/orval";

const DEFAULT_CONFIG = {
  output: {
    mode: "split",
    mock: true,
  },
};

module.exports = {
  WIATool: {
    output: {
      ...DEFAULT_CONFIG.output,
      target: `${ORVAL_DIR}/index.ts`,
      schemas: `${ORVAL_DIR}/models`,
      override: {
        title: () => "Test",
        mutator: {
          path: `${ORVAL_DIR}/axios-instance.ts`,
          name: "orvalAxiosInstance",
        },
      },
    },
    input: {
      target: "./swagger.json",
    },
  },
};

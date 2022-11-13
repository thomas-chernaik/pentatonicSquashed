import React, { createContext, useState } from "react";

type TestConditionContextType = {
  test: boolean;
};

export const TestConditionContext = createContext(
  {} as TestConditionContextType
);

type TestConditionProviderType = {
  children: React.ReactNode;
  test: boolean;
};

const TestConditionProvider = ({
  children,
  test,
}: TestConditionProviderType) => {
  return (
    <TestConditionContext.Provider value={{ test: test }}>
      {children}
    </TestConditionContext.Provider>
  );
};

export default TestConditionProvider;

# hook

根據 React 的官方文件，我們知道 hook 不能在迴圈、條件式或是 function 中呼叫它，只能在最頂層呼叫 hook。

接下來我們將透過實作 `useState` 以及 `useEffect` 的方式來解釋這個問題 🤔

### 實作

```jsx
const React = (() => {
  let hooks = [];
  let index = 0;

  const useState = (initVal) => {
    const localIndex = index;

    if (hooks[localIndex] === undefined) {
      hooks[localIndex] = initVal;
    }

    const setterFunction = (val) => {
      hooks[localIndex] = val;
    };

    index += 1;

    return [hooks[localIndex], setterFunction];
  };

  const useEffect = (cb, dependencies) => {
    let hasChanged = true;

    const prevDependencies = hooks[index];

    if (prevDependencies) {
      hasChanged = false;

      dependencies.forEach((dependency, index) => {
        const prevDependency = prevDependencies[index];
        const areTheSame = Object.is(dependency, prevDependency);
        if (!areTheSame) {
          hasChanged = true;
        }
      });
    }

    if (hasChanged) {
      cb();
    }

    hooks[index] = dependencies;

    index += 1;
  };

  const resetIndex = () => {
    index = 0;
  };

  return {
    useState,
    useEffect,
    resetIndex,
  };
})();

const Component = () => {
  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState(100);

  console.log({ count, num });

  React.useEffect(() => {
    console.log('mounted');
  }, [num]);

  setCount(count + 1);
  setNum(num + 1);
};

// render
Component();
// 每次 render 後都需將 index 歸 0，如果沒有將 index 歸 0 的話，index 將會無限增加
// 導致 hook 無法對應到正確的值
React.resetIndex();
// render
Component();
React.resetIndex();
```
